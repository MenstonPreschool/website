(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    var drawer = document.querySelector('[data-ux="NavigationDrawer"]');
    if (e.target.closest('[data-aid="HAMBURGER_MENU_LINK"]')) {
      e.preventDefault();
      drawer.classList.add('open');
      return;
    }
    if (drawer && e.target.closest('[data-close="true"]')) {
      drawer.classList.remove('open');
      return;
    }
    if (a && a.getAttribute('href') === '#') {
      e.preventDefault();
      if (drawer && drawer.contains(a)) {
        var sub = a.parentElement.querySelector('ul');
        if (sub) {
          var open = sub.style.display === 'block';
          sub.style.display = open ? '' : 'block';
          a.setAttribute('aria-expanded', String(!open));
        }
        return;
      }
      var li = a.closest('li.nav-item');
      if (li) li.classList.toggle('open');
    }
  });

  // Footer copyright: keep the end year current
  document.querySelectorAll('[data-copyright-from]').forEach(function (el) {
    var from = +el.getAttribute('data-copyright-from'), now = new Date().getFullYear();
    el.textContent = now > from ? from + '\u2013' + now : String(from);
  });

  // Contact form: no server behind this site, so hand over to the visitor's mail client.
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f.id !== 'contact-form') return;
    e.preventDefault();
    var d = new FormData(f);
    var body = d.get('message') + '\n\nFrom: ' + d.get('name') + ' <' + d.get('email') + '>';
    location.href = 'mailto:office@menstonpreschool.org?subject=' + encodeURIComponent('Website enquiry') + '&body=' + encodeURIComponent(body);
  });
})();
