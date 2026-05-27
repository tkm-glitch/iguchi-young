function renderHeader(depth = "") {
  const c = SITE_CONFIG;
  const nav = c.nav
    .map((item) => `<a href="${depth}${item.href}" data-nav-link="${item.href}">${item.label}</a>`)
    .join("");

  document.getElementById("site-header").innerHTML = `
    <div class="header-inner">
      <a class="brand" href="${depth}index.html" aria-label="${c.name} ホーム">
        <img class="brand-logo" src="${depth}${c.images.logo}" alt="${c.name}">
        <span>
          <strong>${c.name}</strong>
          <small>${c.area} 少年野球チーム</small>
        </span>
      </a>
      <nav class="global-nav" aria-label="グローバルナビ">
        ${nav}
        <a class="nav-contact" href="${c.links.line}" target="_blank" rel="noopener">LINEで相談</a>
      </nav>
      <button class="menu-button" type="button" aria-label="メニューを開く" aria-expanded="false" data-menu-button>
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" aria-label="モバイルナビ" data-mobile-nav>
      ${nav}
      <a class="nav-contact" href="${c.links.line}" target="_blank" rel="noopener">LINEで相談</a>
    </nav>
  `;
}

function renderFooter(depth = "") {
  const c = SITE_CONFIG;
  const nav = c.nav
    .map((item) => `<a href="${depth}${item.href}">${item.label}</a>`)
    .join("");

  document.getElementById("site-footer").innerHTML = `
    <div class="footer-inner">
      <div>
        <img class="footer-logo" src="${depth}${c.images.logo}" alt="${c.name}">
        <p class="footer-lead">${c.tagline}</p>
        <p class="footer-small">${c.area}で活動する、1977年創設の少年野球チームです。</p>
      </div>
      <div>
        <h2>メニュー</h2>
        <nav class="footer-nav">${nav}</nav>
      </div>
      <div>
        <h2>連絡先</h2>
        <p>${c.contact.email}</p>
        <p>${c.contact.practiceLocation}</p>
        <div class="footer-links">
          <a href="${c.links.line}" target="_blank" rel="noopener">LINE</a>
          <a href="${c.links.instagram}" target="_blank" rel="noopener">Instagram</a>
          <a href="${c.links.facebook}" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 ${c.name}. All rights reserved.</span>
      <span>Content reference: <a href="${c.links.source}" target="_blank" rel="noopener">iguchiyoung.jimdofree.com</a></span>
    </div>
  `;
}
