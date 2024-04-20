const correctAnswers=['E','E','E','E','E']; // doğru cevaplar
const form=document.querySelector('.question-form'); //form seçimi
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{ // form gönderimini izleme
    e.preventDefault(); //formun varsayılan gönderim davranışı engellenir, böylece sayfa yeniden yüklenmez


    //kullanıcıların cevaplarıını kontrol etme
    let score=0; //score değişkeni, kullanıcının elde ettiği puanı tutar
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
	console.log(userAnsers); //userAnswers adlı bir dizi, form elemanlarından (soruların cevaplarını içeren input alanlarından) kullanıcının verdiği cevapları içerir.
    userAnsers.forEach((answer,index) =>{  //forEach döngüsü kullanılarak, her bir kullanıcı cevabı doğru cevapla karşılaştırılır. Eğer doğru ise, score değişkeni 20 puan arttırılır.
        if(answer === correctAnswers[index])
        {
            score +=20;
        }
    })

    
    result.classList.remove('d-none'); //sonuç kutusunun görünür hale gelmesi sağlanır
    //puanı animasyonlu şekilde gösterme
    let puan=0;
    const bastir= setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;
        if(puan == score)
        {
            clearInterval(bastir);
        }
        else
        {
            puan++;
        }
    }, 10);
 

})
