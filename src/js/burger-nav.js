(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-burger]'),
        closeModalBtn: document.querySelector('[data-modal-close-burger]'),
        modal: document.querySelector('[data-modal-burger]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
            refs.modal.style.transition = 'opacity 1s';
            refs.modal.classList.toggle('is-open');

    }
})();