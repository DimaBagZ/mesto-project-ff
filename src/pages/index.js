import "./index.css";

import { handleCloseByClick, openModal, closeModal } from "../components/modal.js";
import { createCard, likeCard, deleteCard } from "../components/card.js";
import {
  enableValidation,
  clearValidation,
  disableSubmitButton,
  enableSubmitButton,
} from "../components/validation.js";

import {
  getUser,
  getInitCards,
  getInitialData,
  editProfileInfo,
  postNewCard,
  patchUserAvatar,
} from "../components/api.js";

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");

const popupProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const editSaveButton = popupProfile.querySelector(".popup__button");

const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupCloseProfile = popupProfile.querySelector(".popup__close");
const popupCloseNewCard = popupNewCard.querySelector(".popup__close");

const editProfileForm = document.forms["edit-profile"];
const nameProfileInput = editProfileForm.querySelector(".popup__input_type_name");
const jobProfileInput = editProfileForm.querySelector(".popup__input_type_description");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupEditFormCard = popupNewCard.querySelector(".popup__form");
const nameInput = popupEditFormCard.querySelector(".popup__input_type_card-name");
const linkInput = popupEditFormCard.querySelector(".popup__input_type_url");
const cardFormSubmitButton = popupEditFormCard.querySelector(".popup__button");

const profileImageButton = document.querySelector(".profile__image-cover");
const profileImage = document.querySelector(".profile__image");
const profilePopupAvatar = document.querySelector(".popup_type_avatar");
const closeProfileButton = profilePopupAvatar.querySelector(".popup__close");
const profileFormAvatar = document.forms["avatar_edit"];
const profileLinkInput = profileFormAvatar.querySelector(".popup__input_type_url");
const avatarFormSubmitButton = profilePopupAvatar.querySelector(".popup__button");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function addCard(
  card,
  createCard,
  cardTemplate,
  deleteCard,
  openFullScreen,
  likeCard,
  userId
) {
  const cardElement = createCard(
    card,
    cardTemplate,
    deleteCard,
    openFullScreen,
    likeCard,
    userId
  );
  cardsContainer.append(cardElement);
}

// Отображаем загрузку данных, пока идет отправка
const showLoading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

// Заполняем контентом карточку
function renderCards(cards, userId) {
  cards.forEach((card) => {
    addCard(card, createCard, cardTemplate, deleteCard, openFullScreen, likeCard, userId);
  });
}

// Открытие карточки на весь экран
function openFullScreen(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openModal(popupTypeImage);
}

// Сохраняем поля данных о Юзере и его деятельности
function fillPopupEditInputs() {
  nameProfileInput.value = profileName.textContent;
  jobProfileInput.value = profileDescription.textContent;
}

// Редактор профиля пользователя
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const nameInputValue = nameProfileInput.value;
  const jobInputValue = jobProfileInput.value;
  showLoading(true, editSaveButton);
  disableSubmitButton(editSaveButton, validationConfig.inactiveButtonClass);
  editProfileInfo(nameInputValue, jobInputValue)
    .then((res) => {
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(popupProfile);
    })
    .catch((error) => {
      console.log(error);
      enableSubmitButton(editSaveButton, validationConfig.inactiveButtonClass);
    })
    .finally(() => {
      showLoading(false, editSaveButton);
    });
}

// Редактор аватара пользователя
function handleProfileAvatarSubmit(evt) {
  evt.preventDefault();
  const linkValue = profileLinkInput.value;
  showLoading(true, avatarFormSubmitButton);
  disableSubmitButton(avatarFormSubmitButton, validationConfig.inactiveButtonClass);
  patchUserAvatar(linkValue)
    .then((res) => {
      profileImage.style.backgroundImage = linkValue;
      profileImage.style.backgroundImage = `url('${res.avatar}')`;
      closeModal(profilePopupAvatar);
      profileFormAvatar.reset();
    })
    .catch((error) => {
      console.log(error);
      enableSubmitButton(avatarFormSubmitButton, validationConfig.inactiveButtonClass);
    })
    .finally(() => {
      showLoading(false, avatarFormSubmitButton);
    });
}

// Едит карточек на страницу
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const linkValue = linkInput.value;
  showLoading(true, cardFormSubmitButton);
  disableSubmitButton(cardFormSubmitButton, validationConfig.inactiveButtonClass);
  postNewCard(nameValue, linkValue)
    .then((card) => {
      const newCard = createCard(
        card,
        cardTemplate,
        deleteCard,
        openFullScreen,
        likeCard,
        userId
      );
      cardsContainer.prepend(newCard);
      closeModal(popupNewCard);
      popupEditFormCard.reset();
      clearValidation(popupEditFormCard, validationConfig);
    })
    .catch((error) => {
      console.log(error);
      enableSubmitButton(cardFormSubmitButton, validationConfig.inactiveButtonClass);
    })
    .finally(() => {
      showLoading(false, cardFormSubmitButton);
    });
}

profileEditButton.addEventListener("click", () => {
  openModal(popupProfile);
  fillPopupEditInputs();
  clearValidation(editProfileForm, validationConfig);
});

profileImageButton.addEventListener("click", () => {
  openModal(profilePopupAvatar);
  profileFormAvatar.reset();
  clearValidation(profileFormAvatar, validationConfig);
});

closeProfileButton.addEventListener("click", () => {
  closeModal(profilePopupAvatar);
});

popupCloseProfile.addEventListener("click", () => closeModal(popupProfile));

///Слушатель сабмита обновления аватара
profileFormAvatar.addEventListener("submit", handleProfileAvatarSubmit);

//Слушатель сабмита формы редактирования профиля
editProfileForm.addEventListener("submit", handleEditFormSubmit);

//Слушатель сабмита новой карточки
popupEditFormCard.addEventListener("submit", handleAddCardSubmit);

profileAddButton.addEventListener("click", () => openModal(popupNewCard));

popupCloseNewCard.addEventListener("click", () => closeModal(popupNewCard));

popupTypeImage.addEventListener("click", handleCloseByClick);
popupNewCard.addEventListener("click", handleCloseByClick);

popupProfile.addEventListener("click", handleCloseByClick);
profilePopupAvatar.addEventListener("click", handleCloseByClick);

let userId;

getInitialData([getUser(), getInitCards()])
  .then(([userList, cards]) => {
    profileName.textContent = userList.name;
    profileDescription.textContent = userList.about;
    userId = userList._id;
    profileImage.style.backgroundImage = `url(${userList.avatar})`;
    renderCards(cards, userId);
  })
  .catch((error) => {
    console.log(error);
  });

enableValidation(validationConfig);