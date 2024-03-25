function closePressEscapeModal(evt) {
    if (evt.key === "Escape") {
      closeModal(document.querySelector(".popup_is-opened"));
    }
  }
  
  function closeOverlay(event) {
    if (event.target.classList.contains("popup_is-opened") || event.target.classList.contains('popup__close')) {
        closeModal(event.currentTarget)
    }
    if (event.target.classList.contains('popup__close')) {
      closeModal(event.target.closest(".popup"));
    }
  }
  
  function openModal(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closePressEscapeModal);
  }
  
  function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closePressEscapeModal);
  }
  
  export { openModal, closeModal, closeOverlay };