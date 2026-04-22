# Tools MDX Structure Audit

This audit reviews the MDX files in `tools/content` with emphasis on:

- files around the target size of ~180 lines
- repeatable SEO structure
- internal linking patterns and quality

## Dataset summary

- Total MDX files: **141**
- Average length: **151.2** lines
- Median length: **170** lines
- Minimum length: **29** lines
- Maximum length: **197** lines
- Files with `## Related calculations`: **141 / 141**
- Files with `## FAQs`: **138 / 141**

## Best-fit files near 180 lines

The strongest “ideal length” examples are exact or near-exact matches:

- 180 — `cart-recovery-revenue-calculator.mdx`
- 180 — `channel-margin-calculator.mdx`
- 180 — `contribution-margin-calculator.mdx`
- 180 — `cpc-calculator.mdx`
- 180 — `cross-sell-revenue-calculator.mdx`
- 180 — `depreciation-calculator.mdx`
- 180 — `ebay-fee-calculator.mdx`
- 180 — `funnel-conversion-calculator.mdx`
- 180 — `lead-value-calculator.mdx`
- 180 — `mer-calculator.mdx`

These files generally represent the current canonical content template.

## Confirmed content structure used for SEO

Across the ~180-line MDX files, the common section order is:

1. Intro paragraph (direct utility statement and user intent)
2. `## What this calculator does`
3. `## How to use ...`
4. `## <Metric> Formula`
5. `## Example calculation`
6. `## What is <metric>?`
7. Practical interpretation / business impact section
8. Comparison sections (`X vs Y`)
9. `## When to use this calculator`
10. `## Common mistakes ...`
11. `## Related calculations` (internal links)
12. `## Useful resources`
13. `## FAQs` with `###` question headings

### Why this helps SEO

- **Search intent coverage:** The repeated “what/how/formula/example” pattern maps to informational queries.
- **Featured snippet potential:** Formula and example blocks are concise and definition-oriented.
- **Long-tail capture:** “vs” and “common mistakes” sections target comparative and troubleshooting searches.
- **Scannability:** Consistent heading hierarchy (`##` + `###`) improves readability and semantic structure.
- **Topical depth:** FAQ sections expand semantic coverage and synonym capture.

## Confirmed internal linking pattern

- Internal links are predominantly placed in:
  - comparison sections (e.g., “X vs Y”)
  - `## Related calculations`
- Link style is consistent markdown linking to `/tools/<slug>`.
- App rendering converts internal links into Next.js client navigation (`Link`) via `MdxContent`.
- Related tool cards are additionally rendered outside MDX from `tools.ts` (`tool.related`), giving a second internal-link path.

### Link quality findings

- Broken internal links found: **9**
- Broken targets currently include:
  - `/tools/shipping-cost-calculator`
  - `/tools/customer-lifetime-value-calculator`
  - `/tools/compound-growth-calculator`
  - `/tools/customer-acquisition-cost-calculator`
  - `/tools/stock-coverage-calculator`
  - `/tools/mrr-calculator`
  - `/tools/economic-order-quantity-calculator`
  - `/tools/debt-to-income-calculator`

These should be corrected to existing slugs or backed by new tool pages to preserve crawl flow and avoid dead internal links.

## Technical SEO wiring (outside MDX)

The page template for each tool adds consistent technical SEO support:

- dynamic metadata title and description
- canonical URL
- Open Graph and Twitter metadata
- JSON-LD (`WebApplication`) schema
- static generation via `generateStaticParams`

This means MDX provides semantic content depth, while the page layer provides technical metadata consistency.

## Repository fix applied during this audit

- Renamed `tools/content/discount-rate-calculator` to `tools/content/discount-rate-calculator.mdx`.

Without the `.mdx` extension, the tool content loader (`${slug}.mdx`) cannot find the file, so this page would miss its written guide content.

## Recommendations

1. Keep targeting **170–190 lines** as the practical “ideal” range for most tools.
2. Preserve the current heading sequence because it is coherent and SEO-friendly.
3. Add a CI lint check for internal MDX `/tools/<slug>` links against existing slugs.
4. Optionally add FAQ JSON-LD from the MDX FAQ sections for richer SERP eligibility.
5. Standardize all tool-content files to `.mdx` naming (already fixed for discount rate).
