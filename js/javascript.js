function init() {
    var button = document.getElementById('submitButton');

    function showMeText() {
        alert("Thank you for submitting your information!");
        document.getElementById("myForm").reset();
    }
    button.addEventListener('click', showMeText);

    var button = document.getElementById('resetButton');

    function reset() {
        alert("Are you sure you want to reset all the information?");
        document.getElementById("myForm").reset();
    }
    button.addEventListener('click', reset);
}
window.addEventListener('load', init);