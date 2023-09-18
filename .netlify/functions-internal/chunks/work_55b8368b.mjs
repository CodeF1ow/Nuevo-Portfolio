export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_4c9f32ad.mjs').then(n => n.w);

export { page };
