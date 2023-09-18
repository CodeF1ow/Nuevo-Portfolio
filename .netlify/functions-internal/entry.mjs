import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_f6bf515d.mjs';
import './chunks/astro_49ea4433.mjs';
import './chunks/pages/image-endpoint_0abf3abb.mjs';
import './chunks/pages/contact_d4ed9030.mjs';
/* empty css                                 */import 'os';
import 'fs';
import 'url';
import 'path';
import 'nodemailer';

const _page0  = () => import('./chunks/image-endpoint_da5fdb78.mjs');
const _page1  = () => import('./chunks/index_8738f137.mjs');
const _page2  = () => import('./chunks/contact_008aa090.mjs');
const _page3  = () => import('./chunks/about_e8ea9842.mjs');
const _page4  = () => import('./chunks/work_55b8368b.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/about.astro", _page3],["src/pages/work.astro", _page4]]);
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
