// Toggle  icon in mobile view
let toggle = document.querySelector('.toggle');
let toggleIcon = document.getElementById("toggle-icon");
let dashboard = document.querySelector('aside');
let information = document.querySelector('section');

toggleIcon.addEventListener('click', toggleDashboard);

function toggleDashboard(){
    const dashboardDisplay  = dashboard.style.display === "block" ? "none" : "block"
    dashboard.style.display = dashboardDisplay

    const informationDisplay  = dashboard.style.display === "block" ? "none" : "block"
    information.style.display = informationDisplay
    
    toggleIcon.classList.toggle('bi-list')
    toggleIcon.classList.toggle('bi-x')

    changeToggleBackground()
};

function changeToggleBackground() {
    if (toggleIcon.classList.contains('bi-list')) {
        toggle.style.backgroundColor = "#EDF4FA";
    }else if (toggleIcon.classList.contains('bi-x')) {
        toggle.style.backgroundColor = "#FFF";
    }else {
        toggle.style.backgroundColor = "transparent";
    };
}