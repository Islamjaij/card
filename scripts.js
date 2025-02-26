function updateDateTime() {
    let now = new Date();
    document.getElementById('date').innerText = now.toISOString().split('T')[0];
    document.getElementById('time').innerText = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
