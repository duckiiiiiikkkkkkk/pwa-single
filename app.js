function showPage(num) {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.remove("active");

  document.getElementById("page" + num).classList.add("active");
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}