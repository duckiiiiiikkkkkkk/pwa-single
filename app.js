function showPage(num) {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.remove("active");

  document.getElementById("page" + num).classList.add("active");
}

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log("Service Worker 注册成功"))
      .catch(err => console.log("Service Worker 注册失败:", err));
  });
}
