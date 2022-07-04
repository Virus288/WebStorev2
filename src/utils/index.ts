export const toggleNav = (): void => {
  const nav = document.querySelector('#navbar');
  const toggle = document.querySelector('#navbarToggle');

  nav?.classList.toggle('navbar-active');
  toggle?.classList.toggle('navbar-toggle-active');
};
