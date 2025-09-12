const mainEL = document.querySelector('main')
const successfulUIEl = document.getElementById('formSubmitted')
const formEl = document.querySelector('form')


const validateForm = () => {
    const formInputEL = document.querySelectorAll('input , select , textarea')
    let isFormDirty = true

    formInputEL.forEach((field) => {
         if(!field.hasAttribute('required')){
                field.required = true;
                isFormDirty = false;
         }
    })

    return isFormDirty
}

const submitForm = (e) => {
    e.preventDefault();
 
    //do Validation here
    if(validateForm()) {
      const formData = new FormData(formEl);
      // add data to firebase
      const recordObj = Object.fromEntries(formData);
      createRecord(recordObj);

      //Update UI logic
      updateUI()
    }
}

const updateUI = () => {
    mainEL.classList.add('hidden')
    successfulUIEl.classList.remove('hidden')
}

formEl.addEventListener('submit' , submitForm)