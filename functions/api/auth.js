export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // 获取 code（GitHub OAuth 回调会带 code 参数）
  const code = url.searchParams.get('code');
  
  // 如果没有 code，重定向到 GitHub 授权页面
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

  // 构建 Decap CMS 期望的数据格式
  const authData = {
    token: accessToken,
    provider: 'github',
    user: {
      name: user.name || user.login,
      email: user.email,
      avatar_url: user.avatar_url,
    },
  };

  // 返回 HTML 页面，执行 postMessage 并关闭窗口
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Auth Callback</title>
</head>
<body>
  <script>
    (function() {
      window.opener.postMessage(
        ${JSON.stringify(JSON.stringify(authData))},
        '*'
      );
      window.close();
    })();
  </script>
  <p>Authentication successful. You can close this window.</p>
</body>
</html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}

// 处理 OPTIONS 请求（CORS 预检）
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
