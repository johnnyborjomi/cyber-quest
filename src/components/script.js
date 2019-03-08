

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.js-submit-btn');
    if(submitBtn) {
        submitBtn.addEventListener('click', ()=> {
            form.classList.add('submitted');
        });
    }


    const progressBar = document.querySelector('.progress-bar');
    const progressLine = document.querySelector('.js-progress-line');
    const progress = progressBar.dataset.progress;

    setTimeout(()=>{
        progressLine.style.left = progress - 100 + '%';
    },200)

});
