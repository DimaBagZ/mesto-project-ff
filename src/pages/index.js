import "./index.css";
import { initialCards } from "../components/cards.js";
import { closeOverlay, openModal, closeModal} from "../components/modal.js";
import { createCard, likeCard, deleteCard } from "../components/card.js";

const placesList = document.querySelector(".places__list");

const popupProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupCloseProfile = popupProfile.querySelector(".popup__close");
const popupCloseNewCard = popupNewCard.querySelector(".popup__close");

const editProfileForm = document.forms["edit-profile"];
const nameProfileInput = editProfileForm.querySelector(".popup__input_type_name");
const jobProfileInput = editProfileForm.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupEditProfile = popupNewCard.querySelector(".popup__form");
const nameInput = popupEditProfile.querySelector(".popup__input_type_card-name");
const linkInput = popupEditProfile.querySelector(".popup__input_type_url");



function openFullScreen(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(popupTypeImage);
}

profileEditButton.addEventListener("click", () => {
  openModal(popupProfile);
  fillPopupEditInputs();
});


popupCloseProfile.addEventListener("click", () => 
  closeModal(popupProfile));

function fillPopupEditInputs() {
  nameProfileInput.value = profileName.textContent;
  jobProfileInput.value = profileDescription.textContent;
}

function handleEditForm(evt) {
  evt.preventDefault();
  const nameInputValue = nameProfileInput.value;
  const jobInputValue = jobProfileInput.value;
  profileName.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;
  closeModal(popupProfile);
}

editProfileForm.addEventListener("submit", handleEditForm);

popupEditProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const linkValue = linkInput.value;
  const newCard = createCard(nameValue, linkValue, deleteCard, openFullScreen, likeCard);

  placesList.prepend(newCard);
  popupEditProfile.reset();
  closeModal(popupNewCard);
});

profileAddButton.addEventListener("click",  () => 
 openModal(popupNewCard));

popupCloseNewCard.addEventListener("click", () => 
 closeModal(popupNewCard));

popupTypeImage.addEventListener("click", closeOverlay);
popupNewCard.addEventListener("click", closeOverlay);

popupProfile.addEventListener("click", closeOverlay);

initialCards.forEach((item) =>
  placesList.append(createCard(item.name, item.link, deleteCard, openFullScreen, likeCard)));