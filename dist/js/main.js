const mainEL = document.querySelector('main')
const successfulUIEl = document.getElementById('formSubmitted')
const formEl = document.querySelector('form')


const submitForm = (e) => {
    e.preventDefault();
    
    const formData = new FormData(formEl);
    
    //console.log([...formData.entries()]);
    //console.log([...formData.values()]);

    // add data to firebase
    const recordObj = Object.fromEntries(formData);
    //console.log(recordObj);
    createRecord(recordObj);
    
    //Update UI logic
     updateUI()
}

const updateUI = () => {
    mainEL.classList.add('hidden')
    successfulUIEl.classList.remove('hidden')
}

formEl.addEventListener('submit' , submitForm)