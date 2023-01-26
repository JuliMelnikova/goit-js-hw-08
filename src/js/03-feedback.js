import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const formMail= document.querySelector('.feedback-form input');
const formMessage= document.querySelector('.feedback-form textarea');
const storageKey = 'feedback-form-state';

        
function storageForm(e) {
    const { name, value } = e.target;
    const currentValue = JSON.parse(localStorage.getItem(storageKey));
    const newValue = { ...currentValue, [name]: value };

    // console.log('newValue ', newValue);
    localStorage.setItem(storageKey, JSON.stringify(newValue));
}

feedbackForm.addEventListener('input', throttle(storageForm, 500));

(function() {
    const savedData = JSON.parse(localStorage.getItem(storageKey));

    formMail.value = savedData?.email || '';
    formMessage.value = savedData?.message || '';
})();

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    feedbackForm.reset();
    console.log(JSON.parse(localStorage.getItem(storageKey)));

    localStorage.removeItem(storageKey);
});
                
