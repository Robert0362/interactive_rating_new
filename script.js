
document.getElementById('submit').addEventListener('click',function(){
    console.log('click');
    const rateCard = document.getElementsByClassName('rate__card');
    console.log(rateCard);
    const thankCard = document.getElementsByClassName('thank__you');
    console.log(thankCard);
    /*rateCard.style.display = "none"; */
    rateCard.style="display:none"; 
    thankCard.style="display:block;"
});
