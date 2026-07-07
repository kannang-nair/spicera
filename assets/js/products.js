/* ============================================================
   Spicera — Product Catalog
   All products from the Spicera GI catalogue (product_list.pdf
   + Indian_GI_Products_Reference.pdf).
   Prices are in INR for the base pack size.
   Colors drive the generated top-down bowl artwork.
   ============================================================ */

window.SPICERA = window.SPICERA || {};

SPICERA.CATEGORIES = [
  { key: "spices",    label: "Spices" },
  { key: "nuts",      label: "Nuts" },
  { key: "seeds",     label: "Seeds" },
  { key: "dryfruits", label: "Dry Fruits" },
  { key: "oil",       label: "Oils" },
  { key: "honey",     label: "Honey" },
  { key: "ghee",      label: "Ghee" },
  { key: "herbal",    label: "Herbals" }
];

/* Pack sizes offered per group: [label, price factor], base size marked */
SPICERA.SIZES = {
  spices:    [["100 g", 0.5], ["250 g", 1], ["500 g", 1.9]],
  seeds:     [["100 g", 0.5], ["250 g", 1], ["500 g", 1.9]],
  nuts:      [["250 g", 0.55], ["500 g", 1], ["1 kg", 1.9]],
  dryfruits: [["250 g", 0.55], ["500 g", 1], ["1 kg", 1.9]],
  oil:       [["200 ml", 1], ["500 ml", 2.2]],
  honey:     [["250 g", 0.6], ["500 g", 1]],
  ghee:      [["250 ml", 0.55], ["500 ml", 1], ["1 L", 1.9]],
  herbal:    [["1 unit", 1]]
};
SPICERA.BASE_SIZE = {
  spices: "250 g", seeds: "250 g", nuts: "500 g", dryfruits: "500 g",
  oil: "200 ml", honey: "500 g", ghee: "500 ml", herbal: "1 unit"
};

SPICERA.PRODUCTS = [
  /* ---------------- NUTS ---------------- */
  { id: 1,  slug: "almonds",         name: "Almonds",              cat: "nuts",   origin: "Kashmir",                    gi: false, price: 899,
    desc: "Premium Himalayan almonds with a rich, buttery flavor — hand-graded whole kernels from the valleys of Kashmir.",
    c: { fill: "#C98F52", fleck: "#8F5B2B", bowl: "#83422B" } },
  { id: 2,  slug: "cashews",         name: "Cashews",              cat: "nuts",   origin: "Goa",                        gi: true,  price: 1099,
    desc: "GI-certified Goan cashews, famous for large white kernels and a naturally sweet, creamy taste.",
    c: { fill: "#EEDFC0", fleck: "#D3B583", bowl: "#57705E" } },
  { id: 3,  slug: "walnuts",         name: "Walnuts",              cat: "nuts",   origin: "Kashmir",                    gi: false, price: 999,
    desc: "Thin-shelled Kashmiri walnuts with rich taste — premium quality whole halves, naturally sun-dried.",
    c: { fill: "#B98A5E", fleck: "#7E5433", bowl: "#2F3A4A" } },
  { id: 4,  slug: "pistachios",      name: "Pistachios",           cat: "nuts",   origin: "Imported Select",            gi: false, price: 1199,
    desc: "High-quality imported pistachios — plump green kernels, lightly roasted and unsalted.",
    c: { fill: "#B9C67A", fleck: "#7C8C43", bowl: "#A34A2A" } },

  /* ---------------- SPICES ---------------- */
  { id: 5,  slug: "star-anise",      name: "Star Anise",           cat: "spices", origin: "Arunachal Pradesh",          gi: false, price: 349,
    desc: "Aromatic star anise from Arunachal Pradesh — whole star pods with a warm, sweet licorice note.",
    c: { fill: "#8A5A33", fleck: "#5C3A1E", bowl: "#57705E" } },
  { id: 6,  slug: "red-chilli",      name: "Red Chilli",           cat: "spices", origin: "Byadagi, Karnataka",         gi: true,  price: 249,
    desc: "GI-certified Byadagi chilli, prized for deep red colour and mild heat. Also sourced from Guntur, Andhra Pradesh.",
    c: { fill: "#C03A22", fleck: "#8E2413", bowl: "#2F3A4A" } },
  { id: 7,  slug: "black-cardamom",  name: "Black Cardamom",       cat: "spices", origin: "Sikkim",                     gi: false, price: 499,
    desc: "Smoky Himalayan black cardamom from Sikkim — bold pods that deepen curries, biryanis and stocks.",
    c: { fill: "#4A3B30", fleck: "#2C211A", bowl: "#A34A2A" } },
  { id: 8,  slug: "green-cardamom",  name: "Green Cardamom",       cat: "spices", origin: "Alleppey, Kerala",           gi: true,  price: 649,
    desc: "The Queen of Spices — GI-certified Alleppey green cardamom with intense aroma and bold green pods.",
    c: { fill: "#7E8F4E", fleck: "#55642F", bowl: "#83422B" } },
  { id: 9,  slug: "black-pepper",    name: "Black Pepper",         cat: "spices", origin: "Malabar, Kerala",            gi: true,  price: 399,
    desc: "World-famous GI-certified Malabar black pepper — bold, pungent berries from the Kerala coast.",
    c: { fill: "#3A322B", fleck: "#191512", bowl: "#D8CBB2" } },
  { id: 10, slug: "turmeric",        name: "Turmeric",             cat: "spices", origin: "Erode, Tamil Nadu",          gi: true,  price: 199,
    desc: "GI-certified Erode turmeric with naturally high curcumin — brilliant golden colour and earthy aroma.",
    c: { fill: "#E39B1B", fleck: "#B77613", bowl: "#57705E" } },
  { id: 11, slug: "nutmeg",          name: "Nutmeg",               cat: "spices", origin: "Kerala",                     gi: false, price: 449,
    desc: "Premium Kerala nutmeg — whole kernels with a sweet, warm fragrance for both savoury and dessert dishes.",
    c: { fill: "#7C5638", fleck: "#55371F", bowl: "#2F3A4A" } },
  { id: 12, slug: "cloves",          name: "Cloves",               cat: "spices", origin: "Kanyakumari & Nilgiris",     gi: false, price: 379,
    desc: "Strongly aromatic cloves from Kanyakumari and the Nilgiris — hand-picked whole buds, rich in oil.",
    c: { fill: "#5B4130", fleck: "#3A2718", bowl: "#C46A3F" } },
  { id: 13, slug: "cinnamon-stick",  name: "Cinnamon Stick",       cat: "spices", origin: "Kerala",                     gi: false, price: 299,
    desc: "Sweet aromatic cinnamon bark from Kerala — true rolled quills that infuse warmth into every dish.",
    c: { fill: "#A9663A", fleck: "#7C4522", bowl: "#57705E" } },
  { id: 14, slug: "stone-flower",    name: "Stone Flower (Kalpasi)", cat: "spices", origin: "Tamil Nadu",               gi: false, price: 329,
    desc: "Traditional Chettinad kalpasi (stone flower) — the secret smoky note behind Tamil Nadu's iconic cuisine.",
    c: { fill: "#8C8372", fleck: "#5F584A", bowl: "#83422B" } },
  { id: 15, slug: "asafoetida",      name: "Asafoetida (Hing)",    cat: "spices", origin: "Himachal Cultivation",       gi: false, price: 549,
    desc: "Aromatic hing seasoning from new Himachal cultivation — a pinch transforms dals, curries and pickles.",
    c: { fill: "#D9B96A", fleck: "#B08F3E", bowl: "#2F3A4A" } },

  /* ---------------- SEEDS ---------------- */
  { id: 16, slug: "flax-seeds",      name: "Flax Seeds",           cat: "seeds",  origin: "Madhya Pradesh",             gi: false, price: 149,
    desc: "Omega-3 rich flax seeds from Madhya Pradesh — clean, whole seeds for roasting, grinding and baking.",
    c: { fill: "#9C6B3F", fleck: "#6E4423", bowl: "#57705E" } },
  { id: 17, slug: "pumpkin-seeds",   name: "Pumpkin Seeds",        cat: "seeds",  origin: "Karnataka",                  gi: false, price: 299,
    desc: "Nutrient-rich Karnataka pumpkin seeds — plump green kernels, perfect for snacking and salads.",
    c: { fill: "#9FAF62", fleck: "#6E7F3A", bowl: "#A34A2A" } },
  { id: 18, slug: "sunflower-seeds", name: "Sunflower Seeds",      cat: "seeds",  origin: "Karnataka",                  gi: false, price: 199,
    desc: "Edible sunflower seeds from Karnataka — hulled, crunchy kernels loaded with vitamin E.",
    c: { fill: "#6E6455", fleck: "#46403A", bowl: "#C8842B" } },
  { id: 19, slug: "cumin-seeds",     name: "Cumin Seeds",          cat: "seeds",  origin: "Gujarat",                    gi: false, price: 229,
    desc: "Bold cumin from Gujarat, India's largest producer — deeply earthy seeds for tempering and masalas.",
    c: { fill: "#8F7A4A", fleck: "#64522C", bowl: "#2F3A4A" } },
  { id: 20, slug: "fennel-seeds",    name: "Fennel Seeds",         cat: "seeds",  origin: "Rajasthan",                  gi: false, price: 179,
    desc: "Sweet-aroma Rajasthani fennel — bright green seeds for digestion, desserts and mukhwas.",
    c: { fill: "#93A05C", fleck: "#66743A", bowl: "#83422B" } },
  { id: 21, slug: "ajwain-seeds",    name: "Ajwain (Carom) Seeds", cat: "seeds",  origin: "Rajasthan",                  gi: false, price: 159,
    desc: "Medicinal ajwain seeds from Rajasthan — sharp thyme-like flavour, a staple of Indian home remedies.",
    c: { fill: "#8C8455", fleck: "#5F5A33", bowl: "#57705E" } },
  { id: 22, slug: "poppy-seeds",     name: "Poppy Seeds",          cat: "seeds",  origin: "Rajasthan",                  gi: false, price: 399,
    desc: "Fine culinary poppy seeds (khus khus) from Rajasthan — for rich gravies, kormas and sweets.",
    c: { fill: "#7E8790", fleck: "#545B63", bowl: "#C46A3F" } },
  { id: 23, slug: "coriander-seeds", name: "Coriander Seeds",      cat: "seeds",  origin: "Kota, Rajasthan",            gi: false, price: 129,
    desc: "Premium Kota coriander — citrusy, golden seeds that form the base of every great masala.",
    c: { fill: "#C2A96A", fleck: "#94793F", bowl: "#2F3A4A" } },
  { id: 24, slug: "black-cumin",     name: "Black Cumin (Kalonji)", cat: "seeds", origin: "Uttar Pradesh",              gi: false, price: 189,
    desc: "Traditional kalonji from Uttar Pradesh — jet-black seeds for pickles, naans and Ayurvedic use.",
    c: { fill: "#2E2A26", fleck: "#121010", bowl: "#D8CBB2" } },
  { id: 25, slug: "mustard-seeds",   name: "Mustard Seeds",        cat: "seeds",  origin: "Rajasthan",                  gi: false, price: 99,
    desc: "Pungent mustard seeds from Rajasthan, India's leading producer — the essential Indian tempering seed.",
    c: { fill: "#B98F2E", fleck: "#8A681C", bowl: "#57705E" } },

  /* ---------------- DRY FRUITS ---------------- */
  { id: 26, slug: "dates",           name: "Dates",                cat: "dryfruits", origin: "Kutch, Gujarat",          gi: false, price: 449,
    desc: "Premium Indian dates from Kutch — soft, caramel-sweet fruit sun-ripened in Gujarat's desert orchards.",
    c: { fill: "#6E4025", fleck: "#4A2814", bowl: "#C8B99A" } },
  { id: 27, slug: "black-raisins",   name: "Black Raisins",        cat: "dryfruits", origin: "Sangli, Maharashtra",     gi: false, price: 349,
    desc: "Naturally sweet black raisins from Sangli — juicy, seedless and dried the traditional way.",
    c: { fill: "#3F3038", fleck: "#241A20", bowl: "#A34A2A" } },

  /* ---------------- OILS ---------------- */
  { id: 28, slug: "herbal-hair-oil", name: "Herbal Hair Oil",      cat: "oil",    origin: "Kerala",                     gi: false, price: 399,
    desc: "Ayurvedic herbal hair oil from Kerala — a traditional blend of coconut oil steeped with potent herbs.",
    c: { fill: "#4E6B3A", fleck: "#334825", bowl: "#83422B" } },
  { id: 29, slug: "coconut-oil",     name: "Coconut Oil",          cat: "oil",    origin: "Pollachi, Tamil Nadu",       gi: false, price: 299,
    desc: "Cold-pressed coconut oil from premium Pollachi coconuts — pure, fragrant and kitchen-to-skincare ready.",
    c: { fill: "#F2EBD9", fleck: "#DCD0B4", bowl: "#57705E" } },

  /* ---------------- HERBALS ---------------- */
  { id: 30, slug: "donkey-milk-soap", name: "Donkey Milk Soap",    cat: "herbal", origin: "Tamil Nadu",                 gi: false, price: 249,
    desc: "Natural skincare soap from Tamil Nadu — gentle donkey milk lather, handmade in small batches.",
    c: { fill: "#EFE3D3", fleck: "#D9C6AC", bowl: "#8C9E8C" } },
  { id: 31, slug: "herbal-products", name: "Herbal Wellness Kit",  cat: "herbal", origin: "Kerala",                     gi: false, price: 499,
    desc: "Ayurvedic formulations from Kerala — a curated set of traditional herbal wellness essentials.",
    c: { fill: "#6F8455", fleck: "#4C5F38", bowl: "#83422B" } },

  /* ---------------- GHEE & HONEY ---------------- */
  { id: 32, slug: "gir-cow-ghee",    name: "Gir Cow Ghee",         cat: "ghee",   origin: "Gujarat",                    gi: false, price: 899,
    desc: "Traditional A2 ghee from Gir cows of Gujarat — slow-churned bilona ghee with a golden grain.",
    c: { fill: "#F0C24E", fleck: "#D3A026", bowl: "#C46A3F" } },
  { id: 33, slug: "forest-honey",    name: "Forest Honey",         cat: "honey",  origin: "Sundarbans / Nilgiris",      gi: false, price: 549,
    desc: "Natural forest honey gathered from the Sundarbans and Nilgiris — raw, unfiltered and single-origin.",
    c: { fill: "#D98E2B", fleck: "#B06E14", bowl: "#2F3A4A" } }
];

/* ---------- helpers ---------- */
SPICERA.byId   = function (id)   { return SPICERA.PRODUCTS.find(function (p) { return p.id === Number(id); }); };
SPICERA.bySlug = function (slug) { return SPICERA.PRODUCTS.find(function (p) { return p.slug === slug; }); };
SPICERA.catLabel = function (key) {
  var c = SPICERA.CATEGORIES.find(function (x) { return x.key === key; });
  return c ? c.label : key;
};
SPICERA.sizesFor = function (p) { return SPICERA.SIZES[p.cat] || [["1 unit", 1]]; };
SPICERA.baseSize = function (p) { return SPICERA.BASE_SIZE[p.cat] || "1 unit"; };
SPICERA.priceFor = function (p, size) {
  var row = SPICERA.sizesFor(p).find(function (s) { return s[0] === size; });
  return Math.round(p.price * (row ? row[1] : 1));
};
SPICERA.money = function (n) { return "₹" + Number(n).toLocaleString("en-IN"); };

/* ============================================================
   Generated artwork: top-down spice bowl SVG (no photos needed)
   Deterministic per product so every render looks identical.
   ============================================================ */
SPICERA.bowlSVG = function (p, size) {
  size = size || 160;
  var c = p.c, seed = p.id * 9973 + 17;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }

  var flecks = "";
  for (var i = 0; i < 30; i++) {
    var a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 40;
    var x = 80 + Math.cos(a) * r, y = 78 + Math.sin(a) * r * 0.96;
    flecks += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' +
      (1 + rnd() * 2.4).toFixed(1) + '" fill="' + c.fleck + '" opacity="' +
      (0.3 + rnd() * 0.55).toFixed(2) + '"/>';
  }
  var mound = "";
  for (var j = 0; j < 3; j++) {
    var ma = rnd() * Math.PI * 2, mr = rnd() * 16;
    mound += '<ellipse cx="' + (80 + Math.cos(ma) * mr).toFixed(1) + '" cy="' +
      (76 + Math.sin(ma) * mr).toFixed(1) + '" rx="' + (16 + rnd() * 14).toFixed(1) +
      '" ry="' + (12 + rnd() * 10).toFixed(1) + '" fill="#fff" opacity="0.07"/>';
  }
  return '<svg class="bowl-art" viewBox="0 0 160 160" width="' + size + '" height="' + size +
    '" role="img" aria-label="' + p.name + '" xmlns="http://www.w3.org/2000/svg">' +
    '<ellipse cx="80" cy="94" rx="62" ry="52" fill="#23201b" opacity="0.16"/>' +
    '<circle cx="80" cy="80" r="63" fill="' + c.bowl + '"/>' +
    '<circle cx="80" cy="80" r="63" fill="#000" opacity="0.12"/>' +
    '<circle cx="80" cy="78" r="60" fill="' + c.bowl + '"/>' +
    '<circle cx="80" cy="78" r="51" fill="#000" opacity="0.22"/>' +
    '<circle cx="80" cy="78" r="47" fill="' + c.fill + '"/>' +
    flecks + mound +
    '<path d="M 34 55 A 54 54 0 0 1 74 21" fill="none" stroke="#fff" stroke-opacity="0.35" stroke-width="4" stroke-linecap="round"/>' +
    '</svg>';
};

/* Small circular thumbnail (cart rows, checkout summary) */
SPICERA.thumbHTML = function (p, size) {
  return '<span class="thumb-wrap">' + SPICERA.bowlSVG(p, size || 56) + "</span>";
};
