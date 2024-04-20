// Memnuniyet anketi gönderimini işler
function submitSatisfaction() {
    var satisfactionRating = document.getElementById('satisfactionRating').value;

    if (satisfactionRating) {
        // Geri bildirim alanına mesajı ekler
        var feedbackArea = document.getElementById('feedbackArea');
        feedbackArea.innerHTML = '<p class="text-success">Teşekkür ederiz! Geri bildirimleriniz bizim için önemli.</p>';
    } else {
        alert('Lütfen memnuniyetinizi değerlendirin.');
    }
}