import type { APIRoute } from 'astro';

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = import.meta.env.INSTAGRAM_USER_ID;

export const GET: APIRoute = async () => {
  // During build or if environment variables are not set, return empty data
  if (import.meta.env.SSR || !INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    return new Response(JSON.stringify({ data: [] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return new Response(JSON.stringify({ data: [] }), {
      status: 200, // Changed to 200 to avoid build failures
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
