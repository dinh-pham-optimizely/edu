window.setState = window.setState || function(t, e) {
  window.localStorage.setItem(t, e), window.dispatchEvent(new StorageEvent("storage", { key: t, newValue: e }));
};
Element.prototype.observeResize = Element.prototype.observeResize || function(t) {
  if ("ResizeObserver" in window)
    new ResizeObserver(t).observe(this);
  else {
    let e = this.getBoundingClientRect();
    setInterval(() => {
      const o = this.getBoundingClientRect();
      (Math.floor(o.width) != Math.floor(e.width) || Math.floor(o.height) != Math.floor(e.height)) && (e = o, t());
    }, 500);
  }
};
HTMLElement.prototype.onOutsideClick = HTMLElement.prototype.onOutsideClick || function(t, e) {
  const o = (i) => {
    !this || this.contains(i.target) || e && e.some((n) => n == null ? void 0 : n.contains(i.target)) || t(i);
  };
  document.addEventListener("mousedown", o), document.addEventListener("touchstart", o);
};
//# sourceMappingURL=main.js.map
