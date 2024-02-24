function showMobileMenu() {
  const mobileMenu = document.querySelector(".mobilemenu");
  mobileMenu.style.display = "flex";
  setTimeout(() => {
    mobileMenu.style.transform = "translateY(0)";
  });
}
function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobilemenu");
  mobileMenu.style.transform = "translateY(-100%)";
  setTimeout(() => {
    mobileMenu.style.display = "none";
  });
}

function inputBoxOpen() {
  var element = document.getElementById("searchbox");
  element.classList.toggle("active");
}
