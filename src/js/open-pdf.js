var pdf_btn = document.getElementById('resume-download-btn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-modal');

pdf_btn.addEventListener('click', () => {
    modal.showModal();
    //window.open('assets/pdf/resume.pdf', '_blank');
    //window.open('src/templates/misc/under-construction.html');
});

closeModal.addEventListener('click', () => {
    modal.close();
});
