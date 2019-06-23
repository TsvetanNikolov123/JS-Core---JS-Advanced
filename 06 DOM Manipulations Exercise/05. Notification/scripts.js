function notify(message) {
    let toast = document.getElementById('notification');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => toast.style.display = 'none', 2000);
}