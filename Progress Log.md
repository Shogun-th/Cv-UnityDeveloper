# 📋 Progress Log - Game Studio Startup Website

บันทึกความคืบหน้าและการเปลี่ยนแปลงของโปรเจกต์การเปลี่ยนผ่านจาก Portfolio เดี่ยวสู่เว็บไซต์ทีม Game Development Startup (สำหรับใช้งานส่งประกวดและ Pitching)

---

## 📅 [2026-08-27] - Milestone 1: ปรับเปลี่ยนโครงสร้างสู่เว็บไซต์ Early-Stage Startup เต็มรูปแบบ

### 🎯 เป้าหมายของ Milestone:
- ปรับเปลี่ยน Positioning จาก Personal Resume เป็น **Early-Stage Indie Game Dev Startup Landing Page**
- คัดกรองและตัด Resource ที่ยังไม่พร้อมออก (เช่น Discord Community, Services/Co-Dev, Press Kit Factsheet, ผลงานเก่าสมัยเรียนที่ไม่เคย Public) ตามคำแนะนำ
- ออกแบบส่วน **Debut Project Spotlight (Teaser & In Active Development)** เพื่อเตรียมความพร้อมสำหรับการส่งประกวด (Game Competitions, Grants, Accelerators)

### 🛠️ รายละเอียดการแก้ไขและ Implement:

1. **`index.html` (โครงสร้างหน้าเว็บ):**
   - **Header:** โลโก้สตูดิโอ `KASIDIS STUDIO` พร้อม Navigation Menu (`About`, `Debut Project`, `Vision`, `Team`, `Tech Stack`, `Contact Us`) และ Mobile Hamburger Drawer
   - **Hero Section:** สโลแกนหลักของสตูดิโอ, Badge ระบุสตูดิโอจากกรุงเทพฯ, Stats Bar (Unity 6, C# Clean Architecture, 1st IP in Development)
   - **About Section:** แนะนำจุดยืนของสตูดิโอ (Agile, Robust Engineering, Creative Independence)
   - **Debut Project Section:** จัดวาง Spotlight Card สำหรับโปรเจกต์เกมแรกของทีมที่กำลังซุ่มพัฒนา ระบุ Specs (Unity, Target Platform PC/Console/Mobile, Pre-Alpha Status) พร้อมข้อความแจ้งเตรียมเปิดตัว Teaser เต็มรูปแบบ
   - **Vision & Pillars:** 3 เสาหลักในการพัฒนาเกม (01. Gameplay First, 02. Technical Precision, 03. Player-Centric Polish)
   - **Team Section:** นำเสนอผู้ร่วมก่อตั้ง (Kasidis Phumjumpa - Founder & Lead Unity Dev) และเครือข่ายทีมงานฝ่ายออกแบบ/เสียง/กราฟิก
   - **Tech Stack Section:** ขีดความสามารถทางวิศวกรรมเกม (Unity, C# OOP/Design Patterns, Git, Firebase/Data, Custom Editor Tools, Multiplatform)
   - **Contact / Pitch Section:** การ์ดติดต่อระดับมืออาชีพสำหรับคณะกรรมการงานประกวด, ผู้สนับสนุน, และพาร์ตเนอร์ (Email, Phone, LinkedIn, Location)

2. **`style.css` (ดีไซน์และธีม):**
   - ออกแบบในธีม **Dark Modern Sci-Fi / Cyber Glassmorphism** (โทนสี Deep Slate `#060911`, Neon Cyan `#00d2ff`, Electric Indigo `#6366f1`)
   - ใช้ฟอนต์ **Plus Jakarta Sans** (อ่านง่าย สบายตา) ผสมกับ **Space Grotesk** (ล้ำสมัย ให้กลิ่นอาย Game Dev)
   - ปรับแต่งการ์ดด้วย Glassmorphism Effect (Backdrop-blur, Glowing Border on Hover, Micro-interactions)
   - รองรับ **Responsive 100%** สำหรับ Desktop, Tablet และ Mobile

3. **`script.js` (การโต้ตอบและลูกเล่น):**
   - ระบบ **Scroll Progress Bar** แสดงระยะการเลื่อนหน้าเว็บ
   - ระบบ **Sticky Glassmorphic Header** ปรับความทึบเมื่อ Scroll ลงมา
   - ระบบ **Mobile Menu Drawer** เปิด-ปิดเมนูบนหน้าจอมือถือ
   - ระบบ **Back to Top Button** แบบ Smooth Scroll
   - ระบบ **Ambient Glowing Particles** ด้วย `particles.js` สร้างบรรยากาศล้ำสมัยด้านหลัง

---

## 📅 [2026-08-27] - Hotfix: แก้ไขปัญหา Browser Cache & ชี้แจง GitHub Actions Warning

### 🔍 สาเหตุและวิธีแก้:
1. **GitHub Actions Warning (`Node.js 20 is deprecated`):**
   - เป็นการแจ้งเตือนภายในของ GitHub Actions Runner (เรื่องการอัปเกรด Node 20 -> 24) **ไม่มีผลกระทบต่อเว็บไซต์** และสถานะการ Build เป็น `Success` ปกติ
2. **หน้าเว็บแสดงผลเพี้ยน (Unstyled HTML):**
   - เกิดจาก Browser Cache จำไฟล์ `style.css` เก่า ทำให้โครงสร้าง HTML ใหม่ไม่พบ Class ใน CSS เดิม
   - **การแก้ไข:** ทำ Cache Busting โดยเพิ่ม `style.css?v=2.0` และ `script.js?v=2.0` ใน `index.html` เพื่อบังคับให้เบราว์เซอร์ดาวน์โหลดไฟล์ตกแต่งเวอร์ชันล่าสุดทันที

---

## 📅 [2026-08-27] - Milestone 2: อัปเดตส่วน Meet the Team (3 สมาชิกหลัก)

### 🛠️ รายละเอียดการเปลี่ยนแปลง:
1. **ตัดกล่อง Placeholder ออก:** ลบการ์ด `Creative & Tech Collaborators` ออกตามคำขอ
2. **จัด Layout การ์ดสมาชิก (2 คอลัมน์):**
   - ฝั่งซ้าย: รูปภาพโปรไฟล์ (`รูปภาพ`)
   - ฝั่งขวา: รายละเอียดประวัติ ทักษะ และลิงก์โซเชียล
   - **นำปุ่มอีเมลออกจากทุกการ์ด** คงเหลือเฉพาะ LinkedIn และ GitHub
3. **เพิ่มข้อมูลและรูปภาพสมาชิกทีมครบ 3 ท่าน:**
   - **1. Kasidis Phumjumpa:** Founder & Lead Unity Developer (`1.jpg`)
   - **2. Pawaris Iamraka:** Game Design (`pawaris.png`) พร้อมลิงก์ LinkedIn
   - **3. Kullanun Galantakapan:** 3D Artist (`kullanun.png`)
4. **อัปเกรด Cache Buster:** ปรับเป็น `v=3.0` เพื่อให้หน้าเว็บโหลด CSS/JS ล่าสุดทันที

---

## 📅 [2026-08-27] - Milestone 3: ขยายขนาดรูปภาพทีมงาน & เพิ่มสมาชิกอีก 2 ท่าน (รวม 5 ท่าน)

### 🛠️ รายละเอียดการเปลี่ยนแปลง:
1. **ขยายสัดส่วนรูปภาพประจำตัว (Avatar Expansion):**
   - ปรับ `.member-avatar` ให้มีความกว้าง 210px และยืดเต็มความสูงของการ์ด (`align-items: stretch; height: 100%; min-height: 220px;`)
   - ทำให้ภาพแสดงผลเต็มพื้นที่กรอบฝั่งซ้ายตามที่ผู้ใช้มาร์กกรอบสีแดงไว้ เพิ่มความโดดเด่นและเต็มอิ่ม
2. **เพิ่มสมาชิกทีมงานอีก 2 ท่าน (รวมเป็น 5 สมาชิกหลัก):**
   - **1. Kasidis Phumjumpa (`1.jpg`):** Founder & Lead Unity Developer
   - **2. Pawaris Iamraka (`pawaris.png`):** Game Design (LinkedIn)
   - **3. Kullanun Galantakapan (`kullanun.png`):** 3D Artist
   - **4. Apinat Fachaiyaphum (`apinat.jpg`):** 3D Modeler & Unity Developer (GitHub: `ApinatF`)
   - **5. Satawat Chantanapot (`satawat.jpg`):** Concept Art & 2D Artist / Illustrator (Pixiv)
3. **อัปเกรด Cache Buster:** ปรับเป็น `v=4.0` ใน `index.html`

---

## 📅 [2026-08-27] - Milestone 4: ปรับแบรนด์สตูดิโอเป็น Solid Median & อัปเดตสโลแกนหลัก

### 🛠️ รายละเอียดการเปลี่ยนแปลง:
1. **เปลี่ยนชื่อสตูดิโอ (Rebranding):**
   - เปลี่ยนชื่อจาก `KasidisStudio` เป็น **`Solid Median`** ทั้งใน Navigation Bar, Footer, Page Title, และ Social Meta Tags
2. **เปลี่ยนสโลแกนหลัก (Hero Headline):**
   - เปลี่ยนเป็น: **"We make games a great way to spend quality time and relax."** พร้อมไฮไลต์สี Gradient สไตล์ Modern
3. **ปรับสถิติส่วนหัว (Hero Stats):**
   - ตัดกล่อง `C# & OOP (Clean Architecture)` ออก คงไว้เฉพาะ `Unity 6 (Core Engine)` และ `1st IP (In Active Development)`
4. **อัปเกรด Cache Buster:** ปรับเป็น `v=5.0` ใน `index.html`

---

## 📌 แผนการดำเนินงานขั้นต่อไป (Next Steps):
- [ ] เมื่อมีชื่อเกมทางการ / Key Visual / Teaser สามารถนำมาใส่แทนที่ Placeholder ในส่วน `Debut Project` ได้ทันที
- [ ] หากมีสมาชิกทีมคนอื่นๆ เพิ่มเติม สามารถเพิ่มการ์ดในส่วน `Team Section` ได้ง่าย
- [ ] ทดสอบและ Deploy ผ่าน GitHub Pages
