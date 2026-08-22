export async function onRequestGet(context) {
    const { request } = context;
    const url = new URL(request.url);
    const targetUrl = decodeURIComponent(url.searchParams.get('url'));
    
    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: '代理请求失败' }), { status: 500 });
    }
}
