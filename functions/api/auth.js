// Cloudflare Pages Function - 处理 GitHub 认证
export async function onRequest(context) {
  const { request, env } = context;
  
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  
  // 处理 OAuth 回调
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  if (code) {
    // 交换 code 获取 access_token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    
    const tokenData = await tokenRes.json();
    
    // 设置 cookie 并重定向到 admin
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/admin/',
        'Set-Cookie': `github_token=${tokenData.access_token}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
      },
    });
  }
  
  // 未登录，重定向到 GitHub OAuth
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
  return Response.redirect(githubAuthUrl, 302);
}
