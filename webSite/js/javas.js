const button=document.querySelector('button'); //düğmeyi seç
const mainPopup=document.querySelector('.main-popup'); //pop-up penceresini seç
const close=document.querySelector('.popup-close'); // kapatma düğmesini seç

// düğmeye tıklandığında ne olacak
button.addEventListener('click',()=>{
	
    mainPopup.style.display='block'; // pop-up penceresini görünür hale getirir
})

//kapatma düğmesine tıklandığında
close.addEventListener('click',()=>{
    mainPopup.style.display='none'; // pop-up penceresini gizle
})