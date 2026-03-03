export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  const code = url.searchParams.get('code');
  
  if (!code) {
    const clientId = env.GITHUB_CLIENT_ID;
    const redirectUri = encodeURIComponent('https://www.laysun.co/api/auth');
    const scope = 'repo';
    
    return Response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`,
      302
    );
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code: code,
    }),
  });

  const tokenData = await tokenRes.json();
  
  if (tokenData.error) {
    return new Response(JSON.stringify(tokenData), { status: 400 });
  }

  const accessToken = tokenData.access_token;

  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'User-Agent': 'LAYSUN-CMS',
    },
  });

  const user = await userRes.json();

  const authData = {
    token: accessToken,
    provider: 'github',
    user: {
      name: user.name || user.login,
      email: user.email,
      avatar_url: user.avatar_url,
    },
  };

  // 使用更可靠的 postMessage 方式
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auth Callback</title>
</head>
<body>
  <p>Authentication successful. Closing window...</p>
  <script>
    (function() {
      var authData = ${JSON.stringify(JSON.stringify(authData))};
      var attempts = 0;
      var maxAttempts = 50;
      
      function trySendMessage() {
        attempts++;
        
        if (window.opener && window.opener !== window) {
          try {
            // 尝试多种方式发送
            window.opener.postMessage(authData, '*');
            window.opener.postMessage({ type: 'auth', data: authData }, '*');
            
            console.log('Auth data sent successfully');
            
            // 延迟关闭，确保消息送达
            setTimeout(function() {
              window.close();
            }, 500);
            
            return;
          } catch (e) {
            console.error('postMessage failed:', e);
          }
        }
        
        if (attempts < maxAttempts) {
          setTimeout(trySendMessage, 100);
        } else {
          // 最终备用方案：显示手动复制提示
          document.body.innerHTML = 
            '<h2>Authentication Successful</h2>' +
            '<p>Please copy this token and paste it in the admin page:</p>' +
            '<textarea style="width:100%;height:100px">' + authData + '</textarea>' +
            '<p>Then close this window and refresh the admin page.</p>';
        }
      }
      
      // 立即尝试，同时监听页面加载完成
      if (document.readyState === 'complete') {
        trySendMessage();
      } else {
        window.onload = trySendMessage;
      }
    })();
  </script>
</body>
</html>
  `;

  return new Response(html, {
    headers: { 
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
