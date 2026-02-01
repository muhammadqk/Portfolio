window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) return;
    e.preventDefault();
    document.body.classList.remove("loaded");
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});
