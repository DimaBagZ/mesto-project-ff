// Конфиг с токеном и названием группы
const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-9",
  headers: {
    authorization: "074d8ca8-f33d-4943-9ac9-367a64b981ac",
    "Content-Type": "application/json",
  },
};

// Функция обработки запроса
const getDataResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// Функция запроса на сервер для получения данных User-а
const getUser = async () => {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  });
  return getDataResponse(res);
};

// Функция запроса на сервер для получения данных карточек
const getInitCards = async () => {
  const res = await fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  });
  return getDataResponse(res);
};

//Возвращаем значения промисов Юзера и Карточек
const getInitialData = () => {
  return Promise.all([getUser(), getInitCards()]);
};

// Функция запроса обновления данных на сервере о профиле
const editProfileInfo = async (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ name, about: description }),
  }).then((res) => getDataResponse(res));
};

// Функция запроса размещения на сервере новой карточки
const postNewCard = async (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({ name, link }),
  }).then((res) => getDataResponse(res));
};

// Функция запроса добавления лайка к карточке
const putLikeCardRequest = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => getDataResponse(res));
};

// Функция запроса удаления лайка с карточки
const deleteLikeCardRequest = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getDataResponse(res));
};

// Функция запроса удалить карточку с сервера
const deleteCardRequest = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getDataResponse(res));
};

const patchUserAvatar = async (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: url }),
  }).then((res) => getDataResponse(res));
};

export {
  getDataResponse,
  getUser,
  getInitCards,
  getInitialData,
  editProfileInfo,
  postNewCard,
  deleteCardRequest,
  putLikeCardRequest,
  deleteLikeCardRequest,
  patchUserAvatar,
};