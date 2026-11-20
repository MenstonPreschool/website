(function () {
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');

  // Mobile menu button
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Dropdown buttons (click or tap; hover and keyboard focus are handled in the CSS)
  document.querySelectorAll('.sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  function closeMenus() {
    document.querySelectorAll('.has-sub.open').forEach(function (li) {
      li.classList.remove('open');
      li.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', function (e) {
    if (header && !header.contains(e.target)) closeMenus();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenus();
  });

  // Footer copyright year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = d.get('message') + '\n\nFrom: ' + d.get('name') + ' <' + d.get('email') + '>';
      location.href = 'mailto:' + form.getAttribute('data-to') +
        '?subject=' + encodeURIComponent('Website enquiry') + '&body=' + encodeURIComponent(body);
    });
  }
})();
