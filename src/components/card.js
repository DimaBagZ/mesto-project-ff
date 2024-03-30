import { deleteCardRequest, putLikeCardRequest, deleteLikeCardRequest } from "./api.js";

function createCard(
    card, 
    cardTemplate, 
    deleteCard, 
    openFullScreen, 
    likeCard,
    userId
) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');
    const cardLikeButton =cardElement.querySelector(".card__like-button");
    const likeCounter = cardElement.querySelector(".card__like-counter");
    const cardId = card._id;
    
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector(".card__title").textContent = card.name;
    likeCounter.textContent = card.likes.length;

    const isLiked = card.likes.some((like) => like._id === userId);
    if (isLiked) {
      cardLikeButton.classList.add("card__like-button_is-active");
    }

    if (userId === card.owner._id) {
      deleteButton.classList.remove("card__delete-button-hidden");
      deleteButton.addEventListener("click", () => {
        deleteCard(cardId, cardElement);
      });
    } else {
      deleteButton.classList.add("card__delete-button-hidden");
    }

    cardLikeButton.addEventListener("click", () => {
      likeCard(cardLikeButton, likeCounter, cardId);
    });

    cardImage.addEventListener("click", () => openFullScreen(card));

    return cardElement;
}

function likeCard(cardLikeButton, likeCounter, cardId) {
    const like = cardLikeButton.classList.contains("card__like-button_is-active")
      ? deleteLikeCardRequest
      : putLikeCardRequest;
    like(cardId)
      .then((patchCard) => {
        cardLikeButton.classList.toggle("card__like-button_is-active");
        likeCounter.textContent = patchCard.likes.length;
      })
      .catch((error) => console.log(error))
}

function deleteCard(cardId, cardElement) {
    deleteCardRequest(cardId)
      .then(() => cardElement.remove())
      .catch((error) => console.log(error))
}

export {
  createCard,
  likeCard,
  deleteCard
};