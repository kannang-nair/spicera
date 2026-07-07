/* ============================================================
   Spicera — Cart store (localStorage) + header badge + toasts
   Cart line shape: { id, size, qty }
   ============================================================ */

(function () {
  var KEY = "spicera_cart_v1";

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }
  function write(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    SPICERA.cart.refreshBadge();
  }

  SPICERA.cart = {
    items: read,

    add: function (id, size, qty) {
      var p = SPICERA.byId(id);
      if (!p) return;
      size = size || SPICERA.baseSize(p);
      qty = Math.max(1, qty || 1);
      var items = read();
      var line = items.find(function (l) { return l.id === p.id && l.size === size; });
      if (line) line.qty += qty;
      else items.push({ id: p.id, size: size, qty: qty });
      write(items);
      SPICERA.toast(p.name + " (" + size + ") added to cart");
    },

    setQty: function (id, size, qty) {
      var items = read();
      var line = items.find(function (l) { return l.id === Number(id) && l.size === size; });
      if (!line) return;
      line.qty = Math.max(0, qty);
      write(items.filter(function (l) { return l.qty > 0; }));
    },

    remove: function (id, size) {
      write(read().filter(function (l) { return !(l.id === Number(id) && l.size === size); }));
    },

    clear: function () { write([]); },

    count: function () {
      return read().reduce(function (n, l) { return n + l.qty; }, 0);
    },

    subtotal: function () {
      return read().reduce(function (n, l) {
        var p = SPICERA.byId(l.id);
        return p ? n + SPICERA.priceFor(p, l.size) * l.qty : n;
      }, 0);
    },

    FREE_SHIP_OVER: 999,
    SHIP_FLAT: 79,

    shipping: function () {
      var s = this.subtotal();
      return s === 0 || s >= this.FREE_SHIP_OVER ? 0 : this.SHIP_FLAT;
    },

    total: function () { return this.subtotal() + this.shipping(); },

    refreshBadge: function () {
      var n = SPICERA.cart.count();
      document.querySelectorAll(".cart-count").forEach(function (el) {
        el.textContent = n;
        el.classList.toggle("is-empty", n === 0);
      });
    }
  };

  /* ---------- toast ---------- */
  SPICERA.toast = function (msg) {
    var t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' +
      "<span>" + msg + "</span>";
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  };

  document.addEventListener("DOMContentLoaded", function () {
    SPICERA.cart.refreshBadge();

    /* Delegated add-to-cart: any element with [data-add] holding a product id */
    document.body.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-add]");
      if (!btn) return;
      e.preventDefault();
      SPICERA.cart.add(Number(btn.getAttribute("data-add")), btn.getAttribute("data-size") || null, 1);
    });

    /* Mobile nav toggle */
    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        document.querySelector(".site-header").classList.toggle("nav-open");
      });
    }
  });
})();
