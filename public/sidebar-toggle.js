document.addEventListener('DOMContentLoaded', function () {
  var leftSidebar = document.querySelector('.sidebar-pane');
  var mainFrame = document.querySelector('.main-frame');
  var mainPane = document.querySelector('.main-pane');
  var contentContainers = document.querySelectorAll('.main-pane .sl-container');

  if (!leftSidebar) return;

  // Left toggle button
  var leftBtn = document.createElement('button');
  leftBtn.id = 'sl-sidebar-toggle-btn';
  leftBtn.title = 'Toggle sidebar';
  leftBtn.textContent = '<';
  document.body.appendChild(leftBtn);

  var leftCollapsed = sessionStorage.getItem('sidebarCollapsed') === 'true';

  function positionButtons() {
    if (leftSidebar) {
      leftBtn.style.left = (leftCollapsed ? 0 : leftSidebar.getBoundingClientRect().right) + 'px';
    }
  }

  function applyLayout() {
    if (mainPane) mainPane.style.flex = '';
    contentContainers.forEach(function (el) {
      el.style.maxWidth = leftCollapsed ? 'none' : '';
    });
  }

  function applyLeft() {
    if (!leftSidebar || !mainFrame) return;
    if (leftCollapsed) {
      leftSidebar.style.width = '0px';
      leftSidebar.style.overflow = 'hidden';
      mainFrame.style.paddingInlineStart = '0px';
      leftBtn.textContent = '>';
    } else {
      leftSidebar.style.width = '';
      leftSidebar.style.overflow = '';
      mainFrame.style.paddingInlineStart = '';
      leftBtn.textContent = '<';
    }
  }

  leftBtn.addEventListener('click', function () {
    leftCollapsed = !leftCollapsed;
    sessionStorage.setItem('sidebarCollapsed', String(leftCollapsed));
    applyLeft();
    applyLayout();
    positionButtons();
  });

  window.addEventListener('resize', positionButtons);

  applyLeft();
  applyLayout();
  positionButtons();
});
