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

  // 用 code 换取 access_token
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

  // 获取用户信息
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

  // 返回 HTML，添加调试和重试机制
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auth Callback</title>
</head>
<body>
  <script>
    (function() {
      var authData = ${JSON.stringify(JSON.stringify(authData))};
      
      function sendMessage() {
        if (window.opener) {
          window.opener.postMessage(authData, '*');
          console.log('Message sent to opener');
          setTimeout(function() {
            window.close();
          }, 100);
        } else {
          console.error('No window.opener found');
          // 尝试通过 localStorage 传递（备用方案）
          localStorage.setItem('decap-cms-auth', authData);
          document.body.innerHTML = '<p>Authentication successful. Please close this window and refresh the admin page.</p>';
        }
      }
      
      // 延迟执行，确保 opener 已准备好
      setTimeout(sendMessage, 100);
    })();
  </script>
  <p>Processing authentication...</p>
</body>
</html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
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
