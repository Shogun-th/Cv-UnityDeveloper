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

## 📌 แผนการดำเนินงานขั้นต่อไป (Next Steps):
- [ ] เมื่อมีชื่อเกมทางการ / Key Visual / Teaser สามารถนำมาใส่แทนที่ Placeholder ในส่วน `Debut Project` ได้ทันที
- [ ] หากมีสมาชิกทีมคนอื่นๆ เพิ่มเติม สามารถเพิ่มการ์ดในส่วน `Team Section` ได้ง่าย
- [ ] ทดสอบและ Deploy ผ่าน GitHub Pages
