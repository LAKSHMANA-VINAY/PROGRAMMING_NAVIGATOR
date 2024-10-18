function showContent(section) {
    // Remove the active class from all sections and nav items
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.sidebar ul li');

    sections.forEach(sec => sec.classList.remove('active'));
    navItems.forEach(item => item.classList.remove('active'));

    // Add the active class to the clicked nav item and corresponding section
    document.getElementById(section).classList.add('active');
    document.querySelector(`.sidebar ul li[onclick="showContent('${section}')"]`).classList.add('active');
}
function openPopup() {
    document.getElementById('contactPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}