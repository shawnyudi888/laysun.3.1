export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  if (!code) {
    const redirectUri = encodeURIComponent(`${url.origin}/auth`);
    return Response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=repo`,
      302
    );
  }
  
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code
    })
  });
  
  const { access_token } = await tokenRes.json();
  
  return new Response(`
    <script>
      window.opener.postMessage({ type: 'authorization:github:success', payload: { token: '${access_token}' } }, '*');
      window.close();
    </script>
  `, { headers: { 'Content-Type': 'text/html' } });
}
