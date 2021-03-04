(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-location]'),
        closeModalBtn: document.querySelector('[data-modal-close-location]'),
        modal: document.querySelector('[data-modal-location]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
        refs.modal.style.transition = 'opacity 1s';
        refs.modal.classList.toggle('is-open');

    }
})();