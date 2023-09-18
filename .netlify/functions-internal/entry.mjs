import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_d561d7ea.mjs';
import './chunks/astro_49ea4433.mjs';
import './chunks/pages/image-endpoint_292d0d4a.mjs';
import './chunks/pages/contact_a6d11e3d.mjs';
/* empty css                                 */import 'os';
import 'fs';
import 'url';
import 'path';
import 'nodemailer';

const _page0  = () => import('./chunks/image-endpoint_a0c46008.mjs');
const _page1  = () => import('./chunks/index_8c38ac9a.mjs');
const _page2  = () => import('./chunks/contact_73fc9404.mjs');
const _page3  = () => import('./chunks/about_579c98e0.mjs');
const _page4  = () => import('./chunks/work_a8e67d1e.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/work.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
