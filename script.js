function generateQRCode() {
  const url = document.getElementById("urlInput").value.trim();
  const qrCodeContainer = document.getElementById("qrCode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!url || !isValidURL(url)) {
    alert("Please enter a valid URL");
    return;
  }

  qrCodeContainer.innerHTML = "";
  downloadBtn.style.display = "none";

  QRCode.toDataURL(url, { width: 250 }, function (err, dataUrl) {
    if (err) {
      console.error(err);
      return;
    }

    // Show image
    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = "QR Code";
    qrCodeContainer.appendChild(img);

    // Make download button visible and ready
    downloadBtn.href = dataUrl;
    downloadBtn.style.display = "inline-block";
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
