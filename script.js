const generateBtn = document.getElementById("generateBtn");
const urlInput = document.getElementById("urlInput");
const qrCodeContainer = document.getElementById("qrCode");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  qrCodeContainer.innerHTML = ""; // Clear old QR
  downloadBtn.style.display = "none"; // Hide old download
  document.getElementById("urlText").textContent = ""; // Clear old URL text

  if (url === "") {
    alert("Please enter a valid URL");
    return;
  }

  // Generate QR Code
  QRCode.toDataURL(url, { width: 250 }, function (err, dataUrl) {
    if (err) {
      console.error(err);
      return;
    }

    // Show QR image
    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = "QR Code";
    qrCodeContainer.appendChild(img);

    // ✅ Show the URL as text below QR code
    document.getElementById("urlText").textContent = `QR for: ${url}`;

    // Enable download
    downloadBtn.href = dataUrl;
    downloadBtn.style.display = "inline-block";
  });
});
