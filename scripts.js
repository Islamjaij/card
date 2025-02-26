function updateDateTime() {
    let now = new Date();
    let formattedDate = now.toISOString().slice(0, 10); // YYYY-MM-DD
    let formattedTime = now.toLocaleTimeString();
    document.getElementById("datetime").innerHTML = ${formattedDate} br> ${formattedTime};
}

// تحديث الوقت كل ثانية
setInterval(updateDateTime, 1000);
updateDateTime();
