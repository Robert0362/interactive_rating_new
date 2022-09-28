const btnSubmit = document.querySelector('.submit__btn');
const btnRate = document.querySelectorAll('.rate__btn');
const rateCard = document.querySelector('.rate__card');
const thankCard = document.querySelector('.thank__card');
const rateChoice = document.querySelector('.rate__choice');

let userRate;

btnRate.forEach(e => {
    // keeps color of rating buttons default color 
    e.addEventListener("click", () => {
        e.style.backgroundColor = "var(--White)"
        e.style.color = "var(--Orange)"
        // Stores Number 
        userRate = e.innerText;
        });
    });
    
btnSubmit.addEventListener('click', () => {
    if(!userRate){
        alert('Please Choose a Rating before you submit');
        }
    else{
        console.log(userRate)
        rateCard.style.display = "none";
        thankCard.style.display = "block"; 
        rateChoice.innerText = `You selected ${userRate} out of 5`;
    }
});


