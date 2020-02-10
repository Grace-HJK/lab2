function init() {
    var button = document.getElementById('submitButton');

    function showMeText() {
        alert("Thank you for submitting your information!");
    }

    button.addEventListener('click', showMeText);
}
window.addEventListener('load', init);