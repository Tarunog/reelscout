export default async function handler(req, res) {
  const { path = 'movie/popular', ...params } = req.query;
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'TMDB API Key missing on server' });
  }

  const searchParams = new URLSearchParams({ api_key: apiKey, ...params });
  
  try {
    const tmdbRes = await fetch(`https://api.themoviedb.org/3/${path}?${searchParams.toString()}`);
    const data = await tmdbRes.json();
    
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(tmdbRes.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}