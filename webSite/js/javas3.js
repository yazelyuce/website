 // Saati güncelleyen fonksiyon
 function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    var clockElement = document.getElementById('clock');
    clockElement.textContent = hours + ':' + minutes + ':' + seconds;
}

// Saati her saniye güncelle
setInterval(updateClock, 1000);

// Sayfa yüklendiğinde saati göster
updateClock();