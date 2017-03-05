var sections = document.getElementsByClassName('section');
var sidebar = document.getElementsByClassName('sidebar')[0];
var sectionActive;
var sidebarOpen;

var showSidebar = function () {
    sectionActive = this.classList.contains('section--active');
    sidebarOpen = sidebar.classList.contains('sidebar--open');

    if ( sidebarOpen && sectionActive ) {
        sidebar.classList.remove('sidebar--open');
        this.classList.remove('section--active');
    } else {
        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('section--active');
        }
        sidebar.classList.add('sidebar--open');
        this.classList.add('section--active');
    }
}

for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', showSidebar);
}
