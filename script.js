function toggleMenu(menuId) {
  const allMenus = document.querySelectorAll(".dropdown-menu");
  allMenus.forEach(menu => {
    if (menu.id === menuId) {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    } else {
      menu.style.display = "none";
    }
  });
}


function openTab(tabIndex) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach((tab, i) => {
    tab.classList.remove('active');
    buttons[i].classList.remove('active');
  });

  tabs[tabIndex].classList.add('active');
  buttons[tabIndex].classList.add('active');
}



