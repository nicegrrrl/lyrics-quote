const handleListenButtonClick = () => {
  const listenButton = document.querySelector(".button__listen");
  const listenModal = document.querySelector(".listen-modal__controller");

  listenButton.addEventListener("click", () => {
    listenModal.showModal();
  });
};

const handleWatchButtonClick = () => {
  const watchButton = document.querySelector(".button__watch");
  const watchModal = document.querySelector(".watch-modal__controller");

  watchButton.addEventListener("click", () => {
    watchModal.showModal();
  });
};

const handleLikeButtonClick = () => {
  const likeButton = document.querySelector(".button__like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("bg-gray-700");
    likeButton.classList.toggle("text-pink-500");
  });
};

const handleCloseListenModalButtonClick = () => {
  const listenModal = document.querySelector(".listen-modal__controller");
  const closeListenModalButton = document.querySelector(
    ".listen-modal__button--close"
  );

  closeListenModalButton.addEventListener("click", () => listenModal.close());
};

const handleCloseWatchModalButtonClick = () => {
  const watchModal = document.querySelector(".watch-modal__controller");
  const closeWatchModalButton = document.querySelector(
    ".watch-modal__button--close"
  );

  closeWatchModalButton.addEventListener("click", () => watchModal.close());
};

handleListenButtonClick();
handleWatchButtonClick();
handleLikeButtonClick();
handleCloseListenModalButtonClick();
handleCloseWatchModalButtonClick();
