document.addEventListener('DOMContentLoaded', function () {
  var leftSidebar = document.querySelector('.sidebar-pane');
  var rightSidebarContainer = document.querySelector('.right-sidebar-container');
  var rightSidebarPanel = document.querySelector('.right-sidebar');
  var rightSidebarInner = document.querySelector('.right-sidebar-panel');
  var mainFrame = document.querySelector('.main-frame');
  var mainPane = document.querySelector('.main-pane');
  var contentContainers = document.querySelectorAll('.main-pane .sl-container');

  if (!leftSidebar && !rightSidebarContainer) return;

  // Left toggle button
  var leftBtn = document.createElement('button');
  leftBtn.id = 'sl-sidebar-toggle-btn';
  leftBtn.title = 'Toggle sidebar';
  leftBtn.textContent = '<';
  document.body.appendChild(leftBtn);

  // Right toggle button
  var rightBtn = document.createElement('button');
  rightBtn.id = 'sl-right-sidebar-toggle-btn';
  rightBtn.title = 'Toggle table of contents';
  rightBtn.textContent = '>';
  document.body.appendChild(rightBtn);

  var leftCollapsed = sessionStorage.getItem('sidebarCollapsed') === 'true';
  var rightCollapsed = sessionStorage.getItem('rightSidebarCollapsed') === 'true';

  function positionButtons() {
    if (leftSidebar) {
      var leftEdge = leftCollapsed ? 0 : leftSidebar.getBoundingClientRect().right;
      leftBtn.style.left = leftEdge + 'px';
    }
    if (rightSidebarContainer) {
      var rightEdge = rightCollapsed ? 0 : window.innerWidth - rightSidebarInner.getBoundingClientRect().left;
      rightBtn.style.right = rightEdge + 'px';
    }
  }

  function applyLayout() {
    var anyCollapsed = leftCollapsed || rightCollapsed;
    if (mainPane) mainPane.style.flex = rightCollapsed ? '1' : '';
    contentContainers.forEach(function (el) {
      el.style.maxWidth = anyCollapsed ? 'none' : '';
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

  function applyRight() {
    if (!rightSidebarContainer || !rightSidebarPanel) return;
    if (rightCollapsed) {
      rightSidebarContainer.style.width = '0px';
      rightSidebarPanel.style.display = 'none';
      rightBtn.textContent = '<';
    } else {
      rightSidebarContainer.style.width = '';
      rightSidebarPanel.style.display = '';
      rightBtn.textContent = '>';
    }
  }

  leftBtn.addEventListener('click', function () {
    leftCollapsed = !leftCollapsed;
    sessionStorage.setItem('sidebarCollapsed', String(leftCollapsed));
    applyLeft();
    applyLayout();
    positionButtons();
  });

  rightBtn.addEventListener('click', function () {
    rightCollapsed = !rightCollapsed;
    sessionStorage.setItem('rightSidebarCollapsed', String(rightCollapsed));
    applyRight();
    applyLayout();
    positionButtons();
  });

  applyLeft();
  applyRight();
  applyLayout();
  positionButtons();
});
