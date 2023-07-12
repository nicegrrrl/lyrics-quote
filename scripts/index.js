const handleLikeButtonClick = () => {
  const button = document.querySelector(".button__like");

  button.addEventListener("click", () => {
    button.classList.toggle("bg-gray-700");
    button.classList.toggle("text-pink-500");
  });
};

handleLikeButtonClick();
