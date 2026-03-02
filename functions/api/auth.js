export async function onRequest(context) {
  const { env } = context;
  const token = env.GITHUB_TOKEN;
  
  if (!token) {
    return new Response(JSON.stringify({ error: 'Token not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // 验证 token 有效性 - 使用 Bearer 格式（新方式）
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `Bearer ${token}`,  // ← 改成 Bearer
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

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
