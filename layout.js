const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButtons = document.querySelectorAll(".plan button");
const modalActionNo = document.querySelector(".modal__action--negative");
const mobileNav = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button");
const openModal = () => {
  modal.classList.add("open");
  backdrop.classList.add("open");
};
const closeModal = () => {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
};
for (const planButton of planButtons) {
  planButton.addEventListener("click", openModal);
}
backdrop.addEventListener("click", () => {
  closeModal();
  mobileNav.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
if (modalActionNo) {
  modalActionNo.addEventListener("click", closeModal);
}
