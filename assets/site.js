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
      var li = a.closest('li.nav-item');
      if (li) li.classList.toggle('open');
    }
  });

  // Contact form: GoDaddy's backend is gone, so hand over to the visitor's mail client.
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.querySelector('[data-aid="CONTACT_FORM_MESSAGE"]')) return;
    e.preventDefault();
    var v = function (id) {
      var el = f.querySelector('[data-aid="' + id + '"]');
      var i = el && (el.matches('input,textarea') ? el : el.querySelector('input,textarea'));
      return i ? i.value : '';
    };
    var body = v('CONTACT_FORM_MESSAGE') + '\n\nFrom: ' + v('CONTACT_FORM_NAME') + ' <' + v('CONTACT_FORM_EMAIL') + '>';
    location.href = 'mailto:office@menstonpreschool.org?subject=' + encodeURIComponent('Website enquiry') + '&body=' + encodeURIComponent(body);
  });
})();
