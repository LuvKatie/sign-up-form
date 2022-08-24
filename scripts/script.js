const pw = document.querySelector('#user-pw');
const pwConfirm = document.querySelector('#pw-confirm');
const accountBtn = document.querySelector('#create-account');

pwConfirm.addEventListener('input', () => {
    if (pwConfirm.value !== pw.value || pwConfirm.value.length < 6) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
    } else {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    }
});

pw.addEventListener('keydown', () => {
    if (pw.value.length < 6 || pwConfirm.value.length < 6) {
        pw.classList.add('error');
        pwConfirm.classList.add('error');
    } else {
        pw.classList.remove('error');
        pwConfirm.classList.remove('error');
    }
});