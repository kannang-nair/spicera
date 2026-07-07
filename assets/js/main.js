/* ============================================================
   Spicera — page rendering + interactions
   ============================================================ */

/* ---------- Line-art category icons (from the Spicera logo) ---------- */
SPICERA.ICONS = {
  spices: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 38h44c0 8-8 16-22 16S10 46 10 38Z" stroke="#77803F"/><path d="M14 38c0-3 3-5 6-5" /><path d="M22 20l7 14M27 17l7 15" stroke="#8A5A33"/><path d="M40 24l2.6 4.6 5.2.5-3.8 3.6 1 5.1-4.6-2.5-4.6 2.5 1-5.1-3.8-3.6 5.2-.5L40 24Z" stroke="#4A3728"/></svg>',
  nuts: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 14c7 0 11 6 11 14s-4 14-11 14-11-6-11-14 4-14 11-14Z" stroke="#8A5A33"/><path d="M22 20c3 2 4 5 4 8" stroke="#8A5A33"/><path d="M38 30c8-4 15-2 16 4 1 5-3 10-9 10-4 0-6-2-7-5-1-4 0-7 0-9Z" stroke="#B8763A"/><path d="M50 38c-2 3-6 4-9 3" stroke="#B8763A"/></svg>',
  dryfruits: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12c-8 4-13 12-11 22 2 9 10 14 18 12 7-2 11-10 9-19-2-8-9-13-16-15Z" stroke="#8A5A33"/><circle cx="24" cy="30" r="8" stroke="#B8763A"/><circle cx="24" cy="30" r="2.5" fill="#8A5A33" stroke="none"/><circle cx="46" cy="22" r="4" stroke="#4A3728"/><circle cx="52" cy="30" r="4" stroke="#4A3728"/><circle cx="46" cy="38" r="4" stroke="#4A3728"/><circle cx="52" cy="46" r="4" stroke="#4A3728"/></svg>',
  seeds: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 10c6 6 8 12 8 18 0 7-4 12-8 12s-8-5-8-12c0-6 2-12 8-18Z" stroke="#77803F"/><path d="M32 18v16" stroke="#77803F"/><path d="M14 44c4-1 8 1 9 5 1 3-1 6-4 6s-6-3-6-6c0-2 0-4 1-5Z" stroke="#8A5A33"/><path d="M50 44c-4-1-8 1-9 5-1 3 1 6 4 6s6-3 6-6c0-2 0-4-1-5Z" stroke="#8A5A33"/></svg>',
  oil: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M27 10h10v7l4 5v27a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5V22l4-5v-7Z" stroke="#8A5A33"/><path d="M27 13h10" stroke="#8A5A33"/><path d="M23 34h18" stroke="#8A5A33"/><path d="M46 30c5-2 9-1 10 2-3 3-7 3-10-2Z" stroke="#77803F"/><path d="M32 40c2 2 3 4 3 6a3 3 0 1 1-6 0c0-2 1-4 3-6Z" stroke="#B8763A"/></svg>',
  honey: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M40 8 22 26" stroke="#8A5A33"/><path d="M20 20c-3 3-3 7 0 10s7 3 10 0M24 16c-3 3-3 7 0 10M28 12c-2 2-3 5-1 8" stroke="#B8763A"/><path d="M34 40c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z" stroke="#E08D15"/></svg>',
  ghee: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 18h20c3 4 5 8 5 14 0 10-7 18-15 18s-15-8-15-18c0-6 2-10 5-14Z" stroke="#77803F"/><path d="M20 14h24v4H20z" stroke="#8A5A33"/><path d="M20 30h24" stroke="#B8763A"/><path d="M28 38c1 2 3 3 5 3" stroke="#B8763A"/></svg>',
  herbal: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 52V26" stroke="#77803F"/><path d="M32 34c-8 0-14-5-14-13 8 0 14 5 14 13Z" stroke="#77803F"/><path d="M32 28c0-8 6-14 14-14 0 8-6 14-14 14Z" stroke="#4A3728"/><path d="M22 52h20" stroke="#8A5A33"/></svg>',
  leaf: '<svg viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 52C30 20 70 8 116 8"/><path d="M28 40c0-8 6-14 13-15M46 28c1-7 7-12 14-13M66 19c2-6 8-10 14-10M28 40c8 1 14-3 16-9M48 27c8 1 13-2 16-8"/></svg>',
  spoon: '<svg viewBox="0 0 130 60" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><ellipse cx="24" cy="30" rx="18" ry="13"/><path d="M42 30h84"/></svg>',
  jars: '<svg viewBox="0 0 280 200" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M60 60h36v10l6 8v96a8 8 0 0 1-8 8H62a8 8 0 0 1-8-8V78l6-8V60Z"/><path d="M54 120h48" /><rect x="58" y="120" width="40" height="56" fill="#C03A22" opacity=".55" stroke="none"/><path d="M150 90h30v8l5 6v70a7 7 0 0 1-7 7h-26a7 7 0 0 1-7-7v-70l5-6v-8Z"/><rect x="149" y="130" width="32" height="46" fill="#E39B1B" opacity=".55" stroke="none"/><path d="M222 40h26v9l4 5v120a7 7 0 0 1-7 7h-20a7 7 0 0 1-7-7V54l4-5v-9Z"/><rect x="221" y="110" width="28" height="66" fill="#4A3728" opacity=".5" stroke="none"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5"/></svg>'
};

SPICERA.CAT_TAGLINE = {
  spices: "GI-certified heat & aroma", nuts: "Premium Himalayan & Goan",
  seeds: "Cold-country goodness", dryfruits: "Sun-ripened sweetness",
  oil: "Cold-pressed & Ayurvedic", honey: "Raw forest harvest",
  ghee: "Slow-churned bilona", herbal: "Kerala Ayurveda"
};

/* ============================================================
   Shared renderers
   ============================================================ */
function renderCatRow(el) {
  el.innerHTML = SPICERA.CATEGORIES.map(function (c) {
    return '<a class="cat-item" href="shop.html?cat=' + c.key + '">' +
      SPICERA.ICONS[c.key] + "<b>" + c.label + "</b><span>" +
      SPICERA.CAT_TAGLINE[c.key] + "</span></a>";
  }).join("");
}

function productCard(p) {
  var base = SPICERA.baseSize(p);
  return '<article class="p-card reveal">' +
    (p.gi ? '<span class="gi-badge">GI Certified</span>' : "") +
    '<a href="product.html?p=' + p.slug + '">' + SPICERA.bowlSVG(p, 170) + "</a>" +
    "<h3><a href='product.html?p=" + p.slug + "'>" + p.name + "</a></h3>" +
    '<span class="origin">' + p.origin + "</span>" +
    '<span class="price">' + SPICERA.money(p.price) + " <small>/ " + base + "</small></span>" +
    '<div class="row">' +
    '<button class="btn" data-add="' + p.id + '">Add to Cart</button>' +
    '<a class="btn btn-ghost" href="product.html?p=' + p.slug + '">View</a>' +
    "</div></article>";
}

function freeShipBar(el) {
  var sub = SPICERA.cart.subtotal(), goal = SPICERA.cart.FREE_SHIP_OVER;
  var pct = Math.min(100, Math.round((sub / goal) * 100));
  var note = sub >= goal
    ? "🎉 You’ve unlocked <b>FREE shipping</b>!"
    : "Add " + SPICERA.money(goal - sub) + " more for <b>free shipping</b>";
  el.innerHTML = '<span class="fs-note">' + note + '</span><div class="fs-bar"><i style="width:' + pct + '%"></i></div>';
}

function revealInit() {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
}

/* ============================================================
   HOME
   ============================================================ */
function initHome() {
  /* --- the amber blob: 3 products, rotating randomly, moveable --- */
  var stage = document.querySelector(".blob-stage");
  if (!stage) return;
  var pods = Array.prototype.slice.call(stage.querySelectorAll(".pod"));
  var blob = stage.querySelector(".amber-blob");
  var current = [];

  function pick3() {
    var pool = SPICERA.PRODUCTS.slice();
    var out = [];
    while (out.length < 3 && pool.length) {
      var i = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(i, 1)[0]);
    }
    return out;
  }
  function fillPod(pod, p) {
    pod.setAttribute("data-slug", p.slug);
    pod.innerHTML = SPICERA.bowlSVG(p, 240) +
      '<span class="pod-label">' + p.name + "</span>";
  }
  function swap(first) {
    var next = pick3();
    current = next;
    pods.forEach(function (pod, i) {
      if (first) { fillPod(pod, next[i]); pod.classList.add("swap-in"); return; }
      pod.classList.add("swap-out");
      setTimeout(function () {
        fillPod(pod, next[i]);
        pod.classList.remove("swap-out");
        pod.classList.add("swap-in");
        setTimeout(function () { pod.classList.remove("swap-in"); }, 600);
      }, 460 + i * 140);
    });
  }
  swap(true);
  setTimeout(function () { pods.forEach(function (p) { p.classList.remove("swap-in"); }); }, 700);
  var timer = setInterval(function () { swap(false); }, 5000);

  /* click a bowl -> product page (only if not dragged) */
  pods.forEach(function (pod) {
    pod.addEventListener("click", function () {
      if (pod._dragged) { pod._dragged = false; return; }
      var slug = pod.getAttribute("data-slug");
      if (slug) window.location.href = "product.html?p=" + slug;
    });
  });

  /* moveable: subtle parallax on mouse move */
  stage.addEventListener("mousemove", function (e) {
    if (stage._dragging) return;
    var r = stage.getBoundingClientRect();
    var dx = (e.clientX - r.left - r.width / 2) / r.width;
    var dy = (e.clientY - r.top - r.height / 2) / r.height;
    blob.style.transform = "translate(" + dx * 22 + "px," + dy * 18 + "px) rotate(" + dx * 3 + "deg)";
    pods.forEach(function (pod, i) {
      if (pod._dragging) return;
      var f = [30, 42, 24][i];
      pod.style.transform = "translate(" + (-dx * f) + "px," + (-dy * f) + "px)";
    });
  });
  stage.addEventListener("mouseleave", function () {
    blob.style.transform = "";
    pods.forEach(function (pod) { if (!pod._dragging) pod.style.transform = ""; });
  });

  /* moveable: drag any bowl around, springs back on release */
  pods.forEach(function (pod) {
    var sx, sy;
    pod.addEventListener("pointerdown", function (e) {
      pod._dragging = true; stage._dragging = true;
      sx = e.clientX; sy = e.clientY;
      pod.setPointerCapture(e.pointerId);
      pod.style.transition = "none";
    });
    pod.addEventListener("pointermove", function (e) {
      if (!pod._dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 6) pod._dragged = true;
      pod.style.transform = "translate(" + dx + "px," + dy + "px) rotate(" + dx * 0.06 + "deg)";
    });
    function drop() {
      if (!pod._dragging) return;
      pod._dragging = false; stage._dragging = false;
      pod.style.transition = "";
      pod.style.transform = "";
    }
    pod.addEventListener("pointerup", drop);
    pod.addEventListener("pointercancel", drop);
  });

  /* pause rotation while user plays with the bowls */
  stage.addEventListener("pointerdown", function () {
    clearInterval(timer);
    timer = setInterval(function () { swap(false); }, 5000);
  });
}

/* ============================================================
   SHOP
   ============================================================ */
function initShop() {
  var grid = document.querySelector("#shop-grid");
  var chipsWrap = document.querySelector("#shop-chips");
  var search = document.querySelector("#shop-search");
  var params = new URLSearchParams(location.search);
  var active = params.get("cat") || "all";
  var q = "";

  var cats = [{ key: "all", label: "All Products" }].concat(SPICERA.CATEGORIES);
  chipsWrap.innerHTML = cats.map(function (c) {
    return '<button class="chip' + (c.key === active ? " active" : "") + '" data-cat="' + c.key + '">' + c.label + "</button>";
  }).join("");

  function draw() {
    var list = SPICERA.PRODUCTS.filter(function (p) {
      var okCat = active === "all" || p.cat === active;
      var okQ = !q || (p.name + " " + p.origin).toLowerCase().indexOf(q) !== -1;
      return okCat && okQ;
    });
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : '<p class="muted" style="grid-column:1/-1;text-align:center;padding:3rem 0">No products match your search.</p>';
    grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  chipsWrap.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    active = chip.getAttribute("data-cat");
    chipsWrap.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c === chip); });
    history.replaceState(null, "", active === "all" ? "shop.html" : "shop.html?cat=" + active);
    draw();
  });
  if (search) search.addEventListener("input", function () { q = search.value.trim().toLowerCase(); draw(); });
  draw();
}

/* ============================================================
   PRODUCT DETAIL
   ============================================================ */
function initProduct() {
  var params = new URLSearchParams(location.search);
  var p = SPICERA.bySlug(params.get("p")) || SPICERA.PRODUCTS[0];
  var sizes = SPICERA.sizesFor(p);
  var size = SPICERA.baseSize(p);
  var qty = 1;

  document.title = p.name + " — Spicera";
  document.querySelector("#pd-art").innerHTML = SPICERA.bowlSVG(p, 420);
  document.querySelector("#pd-name").textContent = p.name;
  document.querySelector("#pd-origin").innerHTML =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg> ' +
    p.origin + (p.gi ? ' <span class="gi-badge">GI Certified</span>' : "");
  document.querySelector("#pd-desc").textContent = p.desc;

  var priceEl = document.querySelector("#pd-price");
  var optsEl = document.querySelector("#pd-opts");
  function drawPrice() {
    priceEl.innerHTML = SPICERA.money(SPICERA.priceFor(p, size)) + " <small>/ " + size + " pack</small>";
  }
  optsEl.innerHTML = sizes.map(function (s) {
    return '<button class="size-chip' + (s[0] === size ? " active" : "") + '" data-s="' + s[0] + '">' + s[0] + "</button>";
  }).join("");
  optsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".size-chip");
    if (!b) return;
    size = b.getAttribute("data-s");
    optsEl.querySelectorAll(".size-chip").forEach(function (c) { c.classList.toggle("active", c === b); });
    drawPrice();
  });
  drawPrice();

  var qtyInput = document.querySelector("#pd-qty");
  document.querySelector("#qty-minus").addEventListener("click", function () { qty = Math.max(1, qty - 1); qtyInput.value = qty; });
  document.querySelector("#qty-plus").addEventListener("click", function () { qty += 1; qtyInput.value = qty; });
  qtyInput.addEventListener("change", function () { qty = Math.max(1, parseInt(qtyInput.value, 10) || 1); qtyInput.value = qty; });

  document.querySelector("#pd-add").addEventListener("click", function () { SPICERA.cart.add(p.id, size, qty); });
  document.querySelector("#pd-buy").addEventListener("click", function () {
    SPICERA.cart.add(p.id, size, qty);
    window.location.href = "checkout.html";
  });

  /* related: same category first, then others */
  var rel = SPICERA.PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat === p.cat; })
    .concat(SPICERA.PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat !== p.cat; }))
    .slice(0, 4);
  document.querySelector("#related-grid").innerHTML = rel.map(productCard).join("");
  document.querySelectorAll("#related-grid .reveal").forEach(function (el) { el.classList.add("in"); });
}

/* ============================================================
   CART PAGE
   ============================================================ */
function initCart() {
  var linesEl = document.querySelector("#cart-lines");
  var sumEl = document.querySelector("#cart-summary");

  function draw() {
    var items = SPICERA.cart.items();
    if (!items.length) {
      linesEl.innerHTML =
        '<div class="cart-empty"><h3>Your cart is empty</h3>' +
        '<p class="muted">Fill it with GI-certified spices, nuts and more.</p>' +
        '<a class="btn" href="shop.html">Browse the Shop</a></div>';
      sumEl.style.display = "none";
      return;
    }
    sumEl.style.display = "";
    linesEl.innerHTML = items.map(function (l) {
      var p = SPICERA.byId(l.id);
      var unit = SPICERA.priceFor(p, l.size);
      return '<div class="cart-line">' +
        SPICERA.thumbHTML(p, 64) +
        "<div><h3>" + p.name + '</h3><span class="sub">' + l.size + " · " + p.origin +
        (p.gi ? " · GI Certified" : "") + "</span></div>" +
        '<div class="qty-box"><button data-q="-1" data-id="' + l.id + '" data-size="' + l.size + '">−</button>' +
        '<input value="' + l.qty + '" readonly>' +
        '<button data-q="1" data-id="' + l.id + '" data-size="' + l.size + '">+</button></div>' +
        '<span class="line-price">' + SPICERA.money(unit * l.qty) + "</span>" +
        '<button class="remove-btn" title="Remove" data-rm="' + l.id + '" data-size="' + l.size + '">✕</button>' +
        "</div>";
    }).join("");

    var ship = SPICERA.cart.shipping();
    sumEl.querySelector("#sum-rows").innerHTML =
      '<div class="sum-row"><span>Subtotal</span><b>' + SPICERA.money(SPICERA.cart.subtotal()) + "</b></div>" +
      '<div class="sum-row"><span>Shipping</span><b>' + (ship === 0 ? "FREE" : SPICERA.money(ship)) + "</b></div>" +
      '<div class="sum-row total"><span>Total</span><span>' + SPICERA.money(SPICERA.cart.total()) + "</span></div>";
    freeShipBar(sumEl.querySelector(".free-ship"));
  }

  linesEl.addEventListener("click", function (e) {
    var q = e.target.closest("[data-q]");
    if (q) {
      var id = q.getAttribute("data-id"), size = q.getAttribute("data-size");
      var line = SPICERA.cart.items().find(function (l) { return l.id === Number(id) && l.size === size; });
      if (line) SPICERA.cart.setQty(id, size, line.qty + Number(q.getAttribute("data-q")));
      draw();
    }
    var rm = e.target.closest("[data-rm]");
    if (rm) { SPICERA.cart.remove(rm.getAttribute("data-rm"), rm.getAttribute("data-size")); draw(); }
  });
  draw();
}

/* ============================================================
   CHECKOUT PAGE (concept from the Spicera website plan)
   ============================================================ */
function initCheckout() {
  var itemsEl = document.querySelector("#co-items");
  var items = SPICERA.cart.items();

  if (!items.length) {
    document.querySelector(".checkout-wrap").innerHTML =
      '<div class="co-panel cart-empty" style="grid-column:1/-1"><h3>Your cart is empty</h3>' +
      '<p class="muted">Add some products before checking out.</p>' +
      '<a class="btn" href="shop.html">Browse the Shop</a></div>';
    return;
  }

  itemsEl.innerHTML = items.map(function (l) {
    var p = SPICERA.byId(l.id);
    return '<div class="cart-line">' + SPICERA.thumbHTML(p, 52) +
      "<div><h3>" + p.name + " × " + l.qty + '</h3>' +
      '<span class="origin-tag">' + p.origin + (p.gi ? " – GI Certified" : "") + "</span>" +
      '<span class="sub" style="display:block">' + l.size + "</span></div>" +
      '<span class="line-price">' + SPICERA.money(SPICERA.priceFor(p, l.size) * l.qty) + "</span></div>";
  }).join("");

  var ship = SPICERA.cart.shipping();
  document.querySelector("#co-rows").innerHTML =
    '<div class="sum-row"><span>Subtotal</span><b>' + SPICERA.money(SPICERA.cart.subtotal()) + "</b></div>" +
    '<div class="sum-row"><span>Shipping</span><b>' + (ship === 0 ? "FREE" : SPICERA.money(ship)) + "</b></div>" +
    '<div class="sum-row total"><span>Total</span><span>' + SPICERA.money(SPICERA.cart.total()) + "</span></div>";
  freeShipBar(document.querySelector("#co-freeship"));

  /* payment accordion */
  var acc = document.querySelector(".pay-acc");
  acc.addEventListener("click", function (e) {
    var head = e.target.closest(".pay-head");
    if (!head) return;
    acc.querySelectorAll(".pay-opt").forEach(function (o) { o.classList.remove("active"); });
    head.parentElement.classList.add("active");
  });

  /* express buttons — demo notice */
  document.querySelectorAll(".express-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      SPICERA.toast(b.textContent.trim() + " express checkout — connect your payment gateway to enable");
    });
  });

  /* place order */
  document.querySelector("#place-order").addEventListener("click", function () {
    var ok = true;
    document.querySelectorAll("#ship-form [required]").forEach(function (f) {
      var bad = !f.value.trim();
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { SPICERA.toast("Please fill in the highlighted shipping fields"); return; }

    var orderNo = "SPC-" + Date.now().toString().slice(-8);
    SPICERA.cart.clear();
    document.querySelector(".checkout-wrap").innerHTML =
      '<div class="co-panel order-done" style="grid-column:1/-1">' +
      '<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16 9"/></svg>' +
      "<h2>Thank you! Order placed.</h2>" +
      '<p class="muted">Your order <span class="order-no">' + orderNo + "</span> is confirmed.<br>" +
      "A confirmation email is on its way. Your GI-certified goodness ships within 24 hours.</p>" +
      '<a class="btn" href="shop.html">Continue Shopping</a></div>';
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-cats]").forEach(renderCatRow);

  /* fill any [data-bowl] placeholder with generated bowl artwork */
  document.querySelectorAll("[data-bowl]").forEach(function (el) {
    var p = SPICERA.bySlug(el.getAttribute("data-bowl"));
    if (p) el.innerHTML = SPICERA.bowlSVG(p, 300);
  });

  var page = document.body.getAttribute("data-page");
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  if (page === "cart") initCart();
  if (page === "checkout") initCheckout();

  /* home featured grid */
  var featGrid = document.querySelector("#home-picks");
  if (featGrid) {
    var picks = ["turmeric", "black-pepper", "cinnamon-stick"].map(SPICERA.bySlug);
    featGrid.querySelectorAll("[data-feat]").forEach(function (el, i) {
      var p = picks[i];
      el.querySelector(".feat-bowl").innerHTML = SPICERA.bowlSVG(p, 240);
      el.querySelector(".feat-copy p").textContent = p.desc;
      el.querySelector(".price").textContent = SPICERA.money(p.price) + " / " + SPICERA.baseSize(p);
      el.querySelector("[data-add]").setAttribute("data-add", p.id);
      el.querySelector(".feat-view").setAttribute("href", "product.html?p=" + p.slug);
    });
  }

  revealInit();
});
