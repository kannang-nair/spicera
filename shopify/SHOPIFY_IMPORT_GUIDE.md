# Spicera — Shopify Import Guide

`spicera_products_import.csv` contains all **33 Spicera products** (92 variant rows)
in Shopify's official product CSV format, ready to import.

## What's included per product

- **Title, handle & rich description** (with origin story and the Spicera promise)
- **Origin & GI tags** — e.g. `Spices, Byadagi, Karnataka, GI Certified, Spicera`
- **Size variants with prices (INR)**
  - Spices & Seeds: 100 g / 250 g / 500 g
  - Nuts & Dry Fruits: 250 g / 500 g / 1 kg
  - Ghee: 250 ml / 500 ml / 1 L · Oils: 200 ml / 500 ml · Honey: 250 g / 500 g
- **Compare-at price** (~15% above selling price, so a discount shows on the storefront)
- **SKUs** (`SPC-010-250G` = product 10, 250 g pack), variant weights in grams
- **Inventory**: 100 units per variant, tracked by Shopify, oversell denied
- **SEO title & description** for every product
- Status `active`, published to the online store

## How to import

1. In Shopify admin go to **Products → Import**.
2. Upload `spicera_products_import.csv`.
3. Review the preview (Shopify shows the first products) and click **Import**.
4. After import, upload product photos: open each product and drag photos in —
   the CSV intentionally leaves `Image Src` empty because Shopify requires
   images to be hosted at a public URL at import time.

## Regenerating the CSV

Prices, sizes and descriptions live in `generate_shopify_csv.py`.
Edit and re-run:

```bash
python3 generate_shopify_csv.py
```

> The master catalog for the website itself is `assets/js/products.js` —
> keep the two in sync if you change prices or products.

## Tips

- **Collections**: create automated collections matching the tags
  (`Spices`, `Nuts`, `Seeds`, `Dry Fruits`, `GI Certified`) so navigation
  builds itself.
- **Markets/currency**: prices are in INR; set your store currency to INR
  before importing, or adjust prices afterwards.
- **Re-import**: importing the same handles again with "Overwrite existing
  products" updates them in place.
