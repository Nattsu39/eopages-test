import { create200Response, getEtagFromRequest } from "./_common";


export function create304Response(): Response {
  return new Response(null, {
    status: 304,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    },
  });
}

export async function onRequestGet(context) {
  const etag = getEtagFromRequest(context.request);
  if (!etag) {
    return create200Response({ test: 'ok' });
  }
  return create304Response();
}
