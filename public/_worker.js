// This file is required for Cloudflare Pages to handle SPA routing
// It should be placed in the public directory

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Handle static assets
  if (url.pathname.includes('.')) {
    return fetch(request);
  }

  // For all other requests, serve index.html
  return fetch(new URL('/index.html', request.url));
}
