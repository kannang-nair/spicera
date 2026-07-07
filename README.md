# Spicera — From India's Roots to Your Home 🌶️

A complete e-commerce website for **Spicera**, built as plain HTML/CSS/JS
(no build step, no server required) so it works anywhere — static hosting,
WordPress, or as a design reference for Shopify.

The design follows the provided reference: cream backgrounds, deep charcoal
ink, terracotta/orange organic blobs, yellow CTAs, serif display headings,
and line-art category icons taken from the Spicera logo (Spices · Nuts ·
Dry Fruits · Seeds · Oil · Honey · Ghee · Herbals).

## Pages

| File            | What it does |
|-----------------|--------------|
| `index.html`    | Home — hero with dark blob, dark tiles band (Whole & Ground Spices / Organic / Spice Club / 10% Off), About Us preview, logo icon row, **"Our Spices" amber blob with 3 randomly-rotating, draggable product bowls**, featured picks, quote, contact strip |
| `shop.html`     | Full catalog (33 GI/origin products) with category filter chips + search |
| `product.html`  | Product detail — pack sizes, quantity, Add to Cart / Buy Now, related products |
| `cart.html`     | Cart with quantity steppers, free-shipping progress bar, order summary |
| `checkout.html` | Checkout per the Spicera plan — express UPI/GPay/Apple Pay, shipping form, payment accordion (Card / UPI & Net Banking / COD), order summary with origin tags & trust badges |
| `about.html`    | About Us — brand story, why GI origin matters, values |

The cart is stored in `localStorage`, so it persists across pages and visits.
"Place Order" validates the shipping form and shows an order confirmation
(connect a real payment gateway to go live).

## Where things live

```
assets/css/style.css     ← all styling; brand colors are CSS variables in :root
assets/js/products.js    ← THE MASTER CATALOG: names, origins, prices, artwork colors
assets/js/store.js       ← cart logic (localStorage), toasts, header badge
assets/js/main.js        ← page rendering, icons, blob rotator, checkout logic
shopify/                 ← Shopify import CSV + generator + guide
```

Product "photos" are generated as top-down spice-bowl SVG artwork from each
product's colors in `products.js` — swap in real photography anytime by
replacing the `bowlSVG` output with `<img>` tags.

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Using with WordPress

The site is intentionally WordPress-friendly. Three options, easiest first:

1. **Static upload (recommended)** — upload the whole folder to your hosting
   (e.g. `public_html/`) via cPanel/FTP. Works alongside WordPress; link to it
   from your WP menu.
2. **Custom HTML blocks / page builder** — in a Gutenberg "Custom HTML" block
   or Elementor HTML widget, paste the `<section>` markup of any page, and
   enqueue `style.css` + the three JS files once via your theme
   (`wp_enqueue_style` / `wp_enqueue_script` in `functions.php`, or a plugin
   like WPCode). All markup uses plain classes and no WP-conflicting IDs.
3. **Theme conversion** — the pages map 1:1 to template files
   (`front-page.php`, `page-shop.php`, …); the header/footer blocks are
   identical on every page, ready to lift into `header.php` / `footer.php`.

For a real WooCommerce store, keep this as your theme's look & feel and map
`products.js` to WooCommerce products (same names/prices as the Shopify CSV).

## Shopify product listings

`shopify/spicera_products_import.csv` — all 33 products with size variants,
INR prices, GI/origin tags, SKUs, inventory and SEO fields.
See `shopify/SHOPIFY_IMPORT_GUIDE.md` for step-by-step import instructions.

## Customizing

- **Colors** — edit the CSS variables at the top of `assets/css/style.css`
  (`--terra`, `--amber`, `--yellow`, `--ink`, `--cream`, `--olive`, `--brown`).
- **Products / prices** — edit `assets/js/products.js` (site) and
  `shopify/generate_shopify_csv.py` (Shopify), then re-run the generator.
- **Free-shipping threshold** — `FREE_SHIP_OVER` in `assets/js/store.js`
  (currently ₹999; flat ₹79 below that).
- **Contact details** — the contact strip in `index.html` and the footer.
