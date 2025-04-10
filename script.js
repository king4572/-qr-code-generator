function generateQRCode() {
  const url = document.getElementById("urlInput").value.trim();
  const qrCodeContainer = document.getElementById("qrCode");

  if (!url || !isValidURL(url)) {
    alert("Please enter a valid URL");
    return;
  }

  qrCodeContainer.innerHTML = ""; // Clear previous QR

  QRCode.toCanvas(url, { width: 250 }, function (err, canvas) {
    if (err) console.error(err);
    qrCodeContainer.appendChild(canvas);
  });
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
