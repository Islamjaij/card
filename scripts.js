function updateTime() {
    let now = new Date();
    let dateTimeString = now.getFullYear() + "-" +
        (now.getMonth() + 1).toString().padStart(2, '0') + "-" +
        now.getDate().toString().padStart(2, '0') + " " +
        now.getHours().toString().padStart(2, '0') + ":" +
        now.getMinutes().toString().padStart(2, '0') + ":" +
        now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("date-time").innerText = dateTimeString;
}

setInterval(updateTime, 1000);
updateTime();
