document.addEventListener('DOMContentLoaded', function() {
    let signin = document.querySelector('.signin');
    let modal = document.querySelector('.modal');
    let formstart = document.querySelector('.getstarted');
    let close = document.querySelector('.close');
    let submit = document.querySelector('.submit');
    let inputuser = document.querySelector('#user');
    let inputpass = document.querySelector('#pass');
    // let inputs = document.querySelector('.getstarted > input');

    signin.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    submit.addEventListener('click', function() {
        inputuser.className = 'error';
        inputpass.className = 'error';
    });

    inputuser.addEventListener('focus', function () {
        if(inputuser.className == ('error')) {
            inputuser.removeAttribute('class');
        }
    });

    inputpass.addEventListener('focus', function() {
        if(inputpass.className == ('error')) {
            inputpass.removeAttribute('class');
        }
    });

    modal.addEventListener('click', function() {
        if(modal.style.display == 'block') {
            modal.style.display = 'none';
        }
    });

    // inputs.addEventListener('focus', function() {
    //     if(inputuser.className == ('error')) {
    //         inputuser.removeAttribute('class');
    //     }
    //     if (inputpass.className == ('error')) {
    //         inputpass.removeAttribute('class');
    //     }
    // })
});