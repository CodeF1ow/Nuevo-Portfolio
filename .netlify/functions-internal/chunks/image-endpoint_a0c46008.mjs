export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/image-endpoint_292d0d4a.mjs').then(n => n.i);

export { page };
