#!/usr/bin/env python3
"""
Spicera — Shopify product import CSV generator.

Builds spicera_products_import.csv in Shopify's product CSV format from the
same catalog used by the website (assets/js/products.js is the master copy).
Run:  python3 generate_shopify_csv.py
"""

import csv
import os

VENDOR = "Spicera"

# name, handle, category, origin, gi, base_price(INR), description
PRODUCTS = [
    ("Almonds", "almonds", "nuts", "Kashmir", False, 899,
     "Premium Himalayan almonds with a rich, buttery flavor — hand-graded whole kernels from the valleys of Kashmir."),
    ("Cashews", "cashews", "nuts", "Goa", True, 1099,
     "GI-certified Goan cashews, famous for large white kernels and a naturally sweet, creamy taste."),
    ("Walnuts", "walnuts", "nuts", "Kashmir", False, 999,
     "Thin-shelled Kashmiri walnuts with rich taste — premium quality whole halves, naturally sun-dried."),
    ("Pistachios", "pistachios", "nuts", "Imported Select", False, 1199,
     "High-quality imported pistachios — plump green kernels, lightly roasted and unsalted."),
    ("Star Anise", "star-anise", "spices", "Arunachal Pradesh", False, 349,
     "Aromatic star anise from Arunachal Pradesh — whole star pods with a warm, sweet licorice note."),
    ("Red Chilli", "red-chilli", "spices", "Byadagi, Karnataka", True, 249,
     "GI-certified Byadagi chilli, prized for deep red colour and mild heat. Also sourced from Guntur, Andhra Pradesh."),
    ("Black Cardamom", "black-cardamom", "spices", "Sikkim", False, 499,
     "Smoky Himalayan black cardamom from Sikkim — bold pods that deepen curries, biryanis and stocks."),
    ("Green Cardamom", "green-cardamom", "spices", "Alleppey, Kerala", True, 649,
     "The Queen of Spices — GI-certified Alleppey green cardamom with intense aroma and bold green pods."),
    ("Black Pepper", "black-pepper", "spices", "Malabar, Kerala", True, 399,
     "World-famous GI-certified Malabar black pepper — bold, pungent berries from the Kerala coast."),
    ("Turmeric", "turmeric", "spices", "Erode, Tamil Nadu", True, 199,
     "GI-certified Erode turmeric with naturally high curcumin — brilliant golden colour and earthy aroma."),
    ("Nutmeg", "nutmeg", "spices", "Kerala", False, 449,
     "Premium Kerala nutmeg — whole kernels with a sweet, warm fragrance for both savoury and dessert dishes."),
    ("Cloves", "cloves", "spices", "Kanyakumari & Nilgiris", False, 379,
     "Strongly aromatic cloves from Kanyakumari and the Nilgiris — hand-picked whole buds, rich in oil."),
    ("Cinnamon Stick", "cinnamon-stick", "spices", "Kerala", False, 299,
     "Sweet aromatic cinnamon bark from Kerala — true rolled quills that infuse warmth into every dish."),
    ("Stone Flower (Kalpasi)", "stone-flower", "spices", "Tamil Nadu", False, 329,
     "Traditional Chettinad kalpasi (stone flower) — the secret smoky note behind Tamil Nadu's iconic cuisine."),
    ("Asafoetida (Hing)", "asafoetida", "spices", "Himachal Cultivation", False, 549,
     "Aromatic hing seasoning from new Himachal cultivation — a pinch transforms dals, curries and pickles."),
    ("Flax Seeds", "flax-seeds", "seeds", "Madhya Pradesh", False, 149,
     "Omega-3 rich flax seeds from Madhya Pradesh — clean, whole seeds for roasting, grinding and baking."),
    ("Pumpkin Seeds", "pumpkin-seeds", "seeds", "Karnataka", False, 299,
     "Nutrient-rich Karnataka pumpkin seeds — plump green kernels, perfect for snacking and salads."),
    ("Sunflower Seeds", "sunflower-seeds", "seeds", "Karnataka", False, 199,
     "Edible sunflower seeds from Karnataka — hulled, crunchy kernels loaded with vitamin E."),
    ("Cumin Seeds", "cumin-seeds", "seeds", "Gujarat", False, 229,
     "Bold cumin from Gujarat, India's largest producer — deeply earthy seeds for tempering and masalas."),
    ("Fennel Seeds", "fennel-seeds", "seeds", "Rajasthan", False, 179,
     "Sweet-aroma Rajasthani fennel — bright green seeds for digestion, desserts and mukhwas."),
    ("Ajwain (Carom) Seeds", "ajwain-seeds", "seeds", "Rajasthan", False, 159,
     "Medicinal ajwain seeds from Rajasthan — sharp thyme-like flavour, a staple of Indian home remedies."),
    ("Poppy Seeds", "poppy-seeds", "seeds", "Rajasthan", False, 399,
     "Fine culinary poppy seeds (khus khus) from Rajasthan — for rich gravies, kormas and sweets."),
    ("Coriander Seeds", "coriander-seeds", "seeds", "Kota, Rajasthan", False, 129,
     "Premium Kota coriander — citrusy, golden seeds that form the base of every great masala."),
    ("Black Cumin (Kalonji)", "black-cumin", "seeds", "Uttar Pradesh", False, 189,
     "Traditional kalonji from Uttar Pradesh — jet-black seeds for pickles, naans and Ayurvedic use."),
    ("Mustard Seeds", "mustard-seeds", "seeds", "Rajasthan", False, 99,
     "Pungent mustard seeds from Rajasthan, India's leading producer — the essential Indian tempering seed."),
    ("Dates", "dates", "dryfruits", "Kutch, Gujarat", False, 449,
     "Premium Indian dates from Kutch — soft, caramel-sweet fruit sun-ripened in Gujarat's desert orchards."),
    ("Black Raisins", "black-raisins", "dryfruits", "Sangli, Maharashtra", False, 349,
     "Naturally sweet black raisins from Sangli — juicy, seedless and dried the traditional way."),
    ("Herbal Hair Oil", "herbal-hair-oil", "oil", "Kerala", False, 399,
     "Ayurvedic herbal hair oil from Kerala — a traditional blend of coconut oil steeped with potent herbs."),
    ("Coconut Oil", "coconut-oil", "oil", "Pollachi, Tamil Nadu", False, 299,
     "Cold-pressed coconut oil from premium Pollachi coconuts — pure, fragrant and kitchen-to-skincare ready."),
    ("Donkey Milk Soap", "donkey-milk-soap", "herbal", "Tamil Nadu", False, 249,
     "Natural skincare soap from Tamil Nadu — gentle donkey milk lather, handmade in small batches."),
    ("Herbal Wellness Kit", "herbal-products", "herbal", "Kerala", False, 499,
     "Ayurvedic formulations from Kerala — a curated set of traditional herbal wellness essentials."),
    ("Gir Cow Ghee", "gir-cow-ghee", "ghee", "Gujarat", False, 899,
     "Traditional A2 ghee from Gir cows of Gujarat — slow-churned bilona ghee with a golden grain."),
    ("Forest Honey", "forest-honey", "honey", "Sundarbans / Nilgiris", False, 549,
     "Natural forest honey gathered from the Sundarbans and Nilgiris — raw, unfiltered and single-origin."),
]

# Variant sizes per category: (label, price factor, grams)
SIZES = {
    "spices":    [("100 g", 0.5, 100), ("250 g", 1.0, 250), ("500 g", 1.9, 500)],
    "seeds":     [("100 g", 0.5, 100), ("250 g", 1.0, 250), ("500 g", 1.9, 500)],
    "nuts":      [("250 g", 0.55, 250), ("500 g", 1.0, 500), ("1 kg", 1.9, 1000)],
    "dryfruits": [("250 g", 0.55, 250), ("500 g", 1.0, 500), ("1 kg", 1.9, 1000)],
    "oil":       [("200 ml", 1.0, 200), ("500 ml", 2.2, 500)],
    "honey":     [("250 g", 0.6, 250), ("500 g", 1.0, 500)],
    "ghee":      [("250 ml", 0.55, 250), ("500 ml", 1.0, 500), ("1 L", 1.9, 1000)],
    "herbal":    [("1 unit", 1.0, 250)],
}

TYPE_LABEL = {
    "nuts": "Nuts", "spices": "Spices", "seeds": "Seeds", "dryfruits": "Dry Fruits",
    "oil": "Oil", "honey": "Honey", "ghee": "Ghee", "herbal": "Herbal",
}

FOOD = "Food, Beverages & Tobacco > Food Items"
CARE = "Health & Beauty > Personal Care"
CATEGORY_PATH = {
    "nuts": FOOD + " > Nuts & Seeds", "seeds": FOOD + " > Nuts & Seeds",
    "spices": FOOD + " > Seasonings & Spices", "dryfruits": FOOD,
    "honey": FOOD, "ghee": FOOD,
    "oil": FOOD + " > Cooking & Baking Ingredients > Cooking Oils",
    "herbal": CARE,
}
# personal-care exceptions
PERSONAL_CARE_HANDLES = {"herbal-hair-oil", "donkey-milk-soap", "herbal-products"}

HEADER = [
    "Handle", "Title", "Body (HTML)", "Vendor", "Product Category", "Type", "Tags",
    "Published", "Option1 Name", "Option1 Value", "Option2 Name", "Option2 Value",
    "Option3 Name", "Option3 Value", "Variant SKU", "Variant Grams",
    "Variant Inventory Tracker", "Variant Inventory Qty", "Variant Inventory Policy",
    "Variant Fulfillment Service", "Variant Price", "Variant Compare At Price",
    "Variant Requires Shipping", "Variant Taxable", "Variant Barcode",
    "Image Src", "Image Position", "Image Alt Text", "Gift Card",
    "SEO Title", "SEO Description", "Variant Weight Unit", "Status",
]


def sku(pid: int, size: str) -> str:
    code = size.upper().replace(" ", "").replace("1UNIT", "UNIT")
    return f"SPC-{pid:03d}-{code}"


def body_html(name, origin, gi, desc):
    gi_line = " <em>(GI Certified)</em>" if gi else ""
    return (
        f"<p>{desc}</p>"
        f"<p><strong>Origin:</strong> {origin}{gi_line}</p>"
        "<p><strong>Spicera promise:</strong> 100% authentic origin · small-batch "
        "packing · quality guaranteed.</p>"
    )


def main():
    out_path = os.path.join(os.path.dirname(__file__), "spicera_products_import.csv")
    with open(out_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(HEADER)

        for pid, (name, handle, cat, origin, gi, base, desc) in enumerate(PRODUCTS, start=1):
            sizes = SIZES[cat]
            category = CARE if handle in PERSONAL_CARE_HANDLES else CATEGORY_PATH[cat]
            tags = ", ".join(
                filter(None, [TYPE_LABEL[cat], origin, "GI Certified" if gi else "", "Spicera"])
            )
            seo_title = f"{name} — {origin} | Spicera"
            seo_desc = (desc[:317] + "...") if len(desc) > 320 else desc

            for i, (size, factor, grams) in enumerate(sizes):
                price = round(base * factor)
                compare = round(price * 1.15)
                first = i == 0
                w.writerow([
                    handle,
                    name if first else "",
                    body_html(name, origin, gi, desc) if first else "",
                    VENDOR if first else "",
                    category if first else "",
                    TYPE_LABEL[cat] if first else "",
                    tags if first else "",
                    "TRUE" if first else "",
                    "Size" if first else "",
                    size,
                    "", "", "", "",
                    sku(pid, size),
                    grams,
                    "shopify",
                    100,
                    "deny",
                    "manual",
                    price,
                    compare,
                    "TRUE",
                    "TRUE",
                    "",
                    "",  # Image Src — upload product photos in Shopify admin
                    "",
                    f"{name} — {origin}" if first else "",
                    "FALSE" if first else "",
                    seo_title if first else "",
                    seo_desc if first else "",
                    "g",
                    "active" if first else "",
                ])

    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
