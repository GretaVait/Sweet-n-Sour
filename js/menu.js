const menuAcc = document.querySelector('.menu__acc');
menuAcc.addEventListener("click", function() {
    console.log('hi');
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
});