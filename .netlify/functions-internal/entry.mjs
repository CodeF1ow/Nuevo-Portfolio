import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_d42f474b.mjs';
import './chunks/astro_49ea4433.mjs';
import './chunks/pages/image-endpoint_71756c79.mjs';
import './chunks/pages/contact_7b776f6b.mjs';
/* empty css                                 */import 'os';
import 'fs';
import 'url';
import 'path';
import 'nodemailer';

const _page0  = () => import('./chunks/image-endpoint_f2b4ea50.mjs');
const _page1  = () => import('./chunks/index_57c78faf.mjs');
const _page2  = () => import('./chunks/contact_947ad1f2.mjs');
const _page3  = () => import('./chunks/about_9d3a100e.mjs');
const _page4  = () => import('./chunks/work_4a960b7f.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/work.astro", _page4]]);
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
