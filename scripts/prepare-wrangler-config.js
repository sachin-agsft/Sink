import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

// Cloudflare Pages and Workers use different Wrangler config shapes.
// Pages: pages_build_output_dir (no main/assets). Workers: main/assets (no pages_build_output_dir).
if (process.env.CF_PAGES) {
  copyFileSync(
    join(import.meta.dirname, '../wrangler.pages.jsonc'),
    join(import.meta.dirname, '../wrangler.jsonc'),
  )
}
