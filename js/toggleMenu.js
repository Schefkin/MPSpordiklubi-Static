const navLinks = document.getElementById('navLinks');

const showMenu = () => {
    navLinks.style.right = '0';
}
const hideMenu = () => {
    navLinks.style.right = '-200px';
}


document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform any form processing you need here

    // Redirect the user to the desired page
    window.location.href = 'success.html';
});