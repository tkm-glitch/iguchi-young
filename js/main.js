document.addEventListener("DOMContentLoaded", () => {
  const c = SITE_CONFIG;
  const depth = document.body.dataset.depth || "";

  if (document.getElementById("site-header")) renderHeader(depth);
  if (document.getElementById("site-footer")) renderFooter(depth);

  document.querySelectorAll("[data-line-href]").forEach((el) => {
    el.href = c.links.line;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-instagram-href]").forEach((el) => {
    el.href = c.links.instagram;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-facebook-href]").forEach((el) => {
    el.href = c.links.facebook;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-email-href]").forEach((el) => {
    el.href = c.links.email;
  });

  const current = document.body.dataset.page;
  const activeHref = current === "home" ? "index.html" : `${current}.html`;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === activeHref) link.classList.add("active");
  });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuButton.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  renderList("stats-grid", c.stats, (item) => `
    <div class="stat">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `);

  renderList("home-highlights", c.highlights, (item) => `
    <article class="feature-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);

  renderList("recent-posts", c.recentPosts.slice(0, 3), newsCard);
  renderList("news-list", c.recentPosts, newsCard);

  renderList("composition-grid", c.composition, (item) => `
    <div class="mini-card">
      <span>${item.team}</span>
      <strong>${item.grade}</strong>
      <p>${item.members}</p>
    </div>
  `);

  renderList("staff-grid", c.staff, (item) => `
    <article class="staff-card">
      <span>${item.role}</span>
      <h3>${item.name}</h3>
      ${item.detail ? `<p>${item.detail}</p>` : ""}
    </article>
  `);

  renderList("tools-grid", c.tools, (item) => `
    <article class="tool-card">
      <h3>${item.name}</h3>
      <p>${item.note}</p>
    </article>
  `);

  renderList("faq-list", c.faqs, (item) => `
    <details class="faq-item">
      <summary>${item.q}</summary>
      <p>${item.a}</p>
    </details>
  `);

  renderList("achievements-list", c.achievements, (item) => `
    <article class="achievement">
      <h3>${item.year}</h3>
      <ul>${item.items.map((x) => `<li>${x}</li>`).join("")}</ul>
    </article>
  `);

  renderList("gallery-grid", c.images.gallery, (src, index) => `
    <a class="gallery-item" href="${c.links.instagram}" target="_blank" rel="noopener">
      <img src="${depth}${src}" alt="${c.name} フォトギャラリー ${index + 1}" loading="lazy">
    </a>
  `);

  const compositionNote = document.getElementById("composition-note");
  if (compositionNote) compositionNote.textContent = c.compositionNote;
});

function renderList(id, items, template) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(template).join("");
}

function newsCard(item) {
  const date = item.date.replaceAll("-", ".");
  return `
    <article class="news-card">
      <div>
        <span>${date}</span>
        <strong>${item.team}</strong>
      </div>
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <a href="${item.url}" target="_blank" rel="noopener">参照元で読む</a>
    </article>
  `;
}
