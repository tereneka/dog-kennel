const form = document.querySelector(".form");
const formInputUserName = form.querySelector("#firstname");
const popup = document.querySelector(".popup");
const popupUserName = popup.querySelector(".popup__user-name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  popupUserName.textContent = `${formInputUserName.value}`;
  form.style.display = "none";
  popup.classList.add("popup_opened");
  form.reset();
});
