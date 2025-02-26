function updateTime() {
    const now = new Date();
    
    // تحديث التاريخ
    const date = now.toISOString().split('T')[0];
    document.getElementById("current-date").textContent = date;

    // تحديث الوقت
    const time = now.toLocaleTimeString("ar-EG", { hour12: false });
    document.getElementById("current-time").textContent = time;
}

// تحديث الوقت كل ثانية
setInterval(updateTime, 1000);

// تشغيل الدالة عند تحميل الصفحة
updateTime();
