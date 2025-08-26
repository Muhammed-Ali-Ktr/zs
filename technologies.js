function toggleInfo(btn) {
  const infoBox = btn.nextElementSibling;
  if (infoBox.style.display === "block") {
    infoBox.style.display = "none";
    btn.textContent = "Daha Fazla Bilgi";
  } else {
    infoBox.style.display = "block";
    btn.textContent = "Daha Az Bilgi";
  }
}