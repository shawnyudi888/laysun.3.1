export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // 只处理 /api/auth 路径
  if (url.pathname !== '/api/auth') {
    // 如果不是 /api/auth，返回 404 让静态文件服务处理
    return new Response('Not Found', { status: 404 });
  }
  
  const token = env.GITHUB_TOKEN;
  
  if (!token) {
    return new Response(JSON.stringify({ error: 'Token not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // 验证 token 有效性
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'LAYSUN-CMS',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  
  if (!userRes.ok) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const user = await userRes.json();
  
  return new Response(JSON.stringify({
    token: token,
    provider: 'github',
    user: {
      name: user.name || user.login,
      email: user.email,
    },
  }), {
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestOptions(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 只处理 /api/auth 路径的预检请求
  if (url.pathname !== '/api/auth') {
    return new Response(null, { status: 404 });
  }
  
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
