//--- ส่วนที่ 1: จัดการ Progress Bar (โค้ดเดิมของคุณ) ---//
window.onscroll = function() {
    updateScrollProgress();
    scrollFunction(); // เรียกใช้ฟังก์ชันของปุ่ม Scroll to Top ด้วย
};

function updateScrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


//--- ส่วนที่ 2: จัดการปุ่ม Scroll to Top (โค้ดใหม่) ---//

// 1. ดึงปุ่มมาเก็บในตัวแปร
let mybutton = document.getElementById("scrollTopBtn");

// 2. ฟังก์ชันสำหรับแสดง/ซ่อนปุ่ม
function scrollFunction() {
  // ถ้า scroll ลงมาเกิน 100px ให้แสดงปุ่ม
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    // ถ้าน้อยกว่า 100px ให้ซ่อนปุ่ม
    mybutton.style.display = "none";
  }
}

// 3. ฟังก์ชันสำหรับเลื่อนกลับไปด้านบนสุด (แบบ Smooth)
function topFunction() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}