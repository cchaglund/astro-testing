// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    integrations: [
        preact({
        include: ['**/preact/*']
        })
    ],
    adapter: netlify()
});