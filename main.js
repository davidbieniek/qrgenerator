let QRText = document.getElementById("QRText");
let QRImage = document.getElementById("QRImage");

function QR() {
  let API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
  let ApiValue = document.getElementById("QRText");
  QRImage.classList.add("look");
  ApiKey = API + ApiValue.value;
  QRImage.src = ApiKey;
}
