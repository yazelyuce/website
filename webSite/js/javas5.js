// Eklenen ürünleri tutmak için bir dizi oluşturun
var products = [];

// Ürün ekleme fonksiyonu
function addProduct() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;

    // Giriş bilgilerini kontrol et
    if (productName && productPrice) {
        // Yeni bir ürün nesnesi oluştur
        var newProduct = {
            name: productName,
            price: parseFloat(productPrice)
        };

        // Ürünü listeye ekle
        products.push(newProduct);

        // Eklenen ürünleri göster
        displayProducts();

        // Formu sıfırla
        document.getElementById('productForm').reset();
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}

// Eklenen ürünleri gösterme fonksiyonu
function displayProducts() {
    var productList = document.getElementById('productList');
    productList.innerHTML = ''; // Önceki içeriği temizle

    // Her bir ürünü listeye ekle
    products.forEach(function(product, index) {
        var listItem = document.createElement('li');
        listItem.textContent = product.name + ' - Fiyat: ₺' + product.price.toFixed(2);
        listItem.innerHTML += ' <button class="btn btn-danger btn-sm" onclick="removeProduct(' + index + ')">Sil</button>';
        productList.appendChild(listItem);
    });
}

// Ürün silme fonksiyonu
function removeProduct(index) {
    products.splice(index, 1); // İlgili indeksteki ürünü sil
    displayProducts(); // Güncellenmiş ürün listesini göster
}

// Siparişi tamamlama fonksiyonu
function submitOrder() {
    var address = document.getElementById('address').value;

    // Gerekirse, adres bilgisini kullanarak sipariş işlemlerini gerçekleştir
    if (address) {
        alert('Siparişiniz alınmıştır!\nAdres: ' + address);
    } else {
        alert('Lütfen adres bilgilerinizi girin.');
    }
}