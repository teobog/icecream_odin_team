(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-buy-menu]'),
        closeModalBtn: document.querySelector('[data-modal-close-buy-menu]'),
        modal: document.querySelector('[data-modal-buy-menu]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal(e) {
        if (e.target === e.currentTarget){
            refs.modal.style.transition = 'opacity 1s';
            refs.modal.classList.toggle('is-open');
        }
    }
})();