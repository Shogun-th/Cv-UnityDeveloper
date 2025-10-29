// เมื่อผู้ใช้ scroll หน้าเว็บ
window.onscroll = function() {
    updateScrollProgress();
};

function updateScrollProgress() {
    // 1. คำนวณว่า scroll ลงมาแค่ไหนแล้ว
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // 2. คำนวณความสูงทั้งหมดของเนื้อหาที่ scroll ได้
    // (ความสูงทั้งหมด - ความสูงของหน้าจอที่มองเห็น)
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. คำนวณเป็นเปอร์เซ็นต์
    var scrolled = (winScroll / height) * 100;
    
    // 4. อัปเดตความกว้างของหลอด progress bar
    document.getElementById("myBar").style.width = scrolled + "%";
}