/* ISAENS Landing — theme toggle (light/dark)
   Clave localStorage: isaens-theme
   Atajo de teclado: Alt+T
*/
(function () {
  'use strict';

  var STORAGE_KEY = 'isaens-theme';
  var root = document.documentElement;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* noop */ }
  }
  function systemPrefersDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function currentTheme() {
    var stored = getStored();
    if (stored === 'light' || stored === 'dark') return stored;
    return systemPrefersDark() ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark';
    var label = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    var toggles = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute('aria-checked', String(isDark));
      toggles[i].setAttribute('aria-label', label);
      toggles[i].setAttribute('title', label + ' (Alt+T)');
    }
  }
  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    setStored(next);
    applyTheme(next);
  }

  applyTheme(currentTheme());

  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemChange = function () {
      if (!getStored()) applyTheme(currentTheme());
    };
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  var toggles = document.querySelectorAll('.theme-toggle');
  for (var j = 0; j < toggles.length; j++) {
    toggles[j].addEventListener('click', toggleTheme);
  }

  document.addEventListener('keydown', function (e) {
    if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === 't' || e.key === 'T')) {
      e.preventDefault();
      toggleTheme();
    }
  });

  window.toggleTheme = toggleTheme;
})();
