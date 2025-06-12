/**
 * Welcome to your Cloudflare Worker!
 *
 * This worker acts as a secure proxy to protect your API keys.
 * Your frontend will make requests to this worker, which will then
 * add the secret API keys and forward the request to the respective API.
 *
 * How to use:
 * 1. Create a new worker in your Cloudflare dashboard.
 * 2. Paste this code into the worker editor.
 * 3. Go to the worker's "Settings" -> "Variables".
 * 4. Add the following "Secret" variables and paste your keys:
 * - GEMINI_API_KEY
 * - TMDB_API_KEY
 * - OMDB_API_KEY
 * - IMGBB_API_KEY
 * 5. Deploy the worker.
 *
 * Your frontend will now call this worker's URL instead of the APIs directly.
 * Example Frontend Fetch:
 * fetch('/?service=tmdb&type=movie&query=Inception')
 * fetch('/?service=gemini', { method: 'POST', body: JSON.stringify(payload) })
 * fetch('/1/upload?service=imgbb', { method: 'POST', body: formData })
 */

// Define the allowed API services and their base URLs
const API_SERVICES = {
  gemini: 'https://generativelanguage.googleapis.com',
  tmdb: 'https://api.themoviedb.org',
  omdb: 'https://www.omdbapi.com',
  itunes: 'https://itunes.apple.com',
  imgbb: 'https://api.imgbb.com',
};

export default {
  async fetch(request, env, ctx) {
    // We will use a CORS proxy to handle preflight requests (OPTIONS)
    // This is important for allowing your frontend to call this worker from a different domain.
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    const url = new URL(request.url);
    const service = url.searchParams.get('service');

    // Validate if the requested service is in our allowed list
    if (!service || !API_SERVICES[service]) {
      return new Response('Invalid service specified', { status: 400 });
    }

    // Prepare the URL for the target API
    const targetUrl = new URL(API_SERVICES[service] + url.pathname + url.search);

    // **FIX:** Remove the 'service' parameter so it's not sent to the target API
    targetUrl.searchParams.delete('service');

    // Add the appropriate API key based on the service
    switch (service) {
      case 'gemini':
        targetUrl.searchParams.set('key', env.GEMINI_API_KEY);
        break;
      case 'tmdb':
        targetUrl.searchParams.set('api_key', env.TMDB_API_KEY);
        break;
      case 'omdb':
        targetUrl.searchParams.set('apikey', env.OMDB_API_KEY);
        break;
      case 'imgbb':
        targetUrl.searchParams.set('key', env.IMGBB_API_KEY);
        break;
      // 'itunes' does not require a key, so we do nothing.
    }

    // Create a new request to the target API, copying the original request's properties
    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow',
    });

    // Remove origin-related headers to avoid CORS issues with the target APIs
    newRequest.headers.delete('origin');
    newRequest.headers.delete('referer');

    // Make the actual API call
    const response = await fetch(newRequest);

    // Create a new response that can be sent back to the browser, adding CORS headers
    const newResponse = new Response(response.body, response);
    
    // Set CORS headers to allow your frontend to read the response
    newResponse.headers.set('Access-Control-Allow-Origin', '*'); // Or specify your GitHub Pages domain for better security
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return newResponse;
  },
};

// CORS preflight handler
function handleOptions(request) {
  const headers = request.headers;
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS preflight requests.
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*', // Or specify your domain
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400', // 24 hours
      },
    });
  } else {
    // Handle standard OPTIONS requests.
    return new Response(null, {
      headers: {
        Allow: 'GET, POST, PUT, DELETE, OPTIONS',
      },
    });
  }
}