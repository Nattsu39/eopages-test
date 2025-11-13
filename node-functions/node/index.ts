export function onRequestGet(context) {
  return new Response(JSON.stringify(Object.fromEntries(context.request.headers.entries())), {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
    },
  });
}
