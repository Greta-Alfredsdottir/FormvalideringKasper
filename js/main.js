// regular expressions til email og ingen special tegn
const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
const noSpecialSignsRegex = new RegExp(/[!@$%^&*(),?":{}|<>]/)

//have fat i formen med id
let form=document.getElementById('signupform')
let hasErrors = false;


function submitForm(event){
    event.preventDefault()
    clearErrors()

    let firstName = event.target.firstname
    let lastName = event.target.lastname
    let address = event.target.address

    //create et nyt element
    if(firstName.value.length < 2){
        
        setErrorMessage(firstName, 'Dit fornavn skal være mindst to bogstaver')
    } else if (noSpecialSignsRegex.test(firstName.value)){
        setErrorMessage(firstName, 'Dit navn må ikke indeholde specialtegn')
    }
    
    if(lastName.value.length < 2){

        setErrorMessage(lastName, 'Dit efternavn skal være mindst to bogstaver')
    }
    if(address.value.length < 2){

        setErrorMessage(address, 'Din addresse skal være mindst to bogstaver')
    }
    if (hasErrors === false){
        alert('Tillykke du har indsendt formen')
    } 
}
//FUNCTION ERRORMESSAGE
// indsætte elementet i formen (appendChild)
function setErrorMessage(target, message){
        hasErrors =true
        let errorMessage = document.createElement('b')
        errorMessage.classList.add('error')
        errorMessage.innerText = message
        target.after(errorMessage)
}

function clearErrors(){
    hasErrors = false
    let errors = document.querySelectorAll('.error')
    errors.forEach((element)=> {element.remove()})
}