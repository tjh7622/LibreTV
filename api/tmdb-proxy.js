// api/tmdb-proxy.js
export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'Missing URL parameter' });
    }

    try {
        // 解码前端传来的完整 TMDB 请求地址
        const targetUrl = decodeURIComponent(url);
        
        // 后端直接请求 TMDB
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        const data = await response.json();
        
        // 给前端返回完整数据
        res.status(200).json(data);
    } catch (error) {
        console.error('TMDB Proxy Error:', error);
        res.status(500).json({ error: 'Proxy request failed' });
    }
}
