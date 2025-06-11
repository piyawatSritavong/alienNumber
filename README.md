# Alien Numeral Converter (ตัวแปลงเลขต่างดาว)

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)

An interactive web application built with React and TypeScript to solve the "Alien Numeral" conversion challenge. This project demonstrates modern front-end development practices, including state management with React Hooks, component-based architecture, and internationalization (i18n).

เว็บแอปพลิเคชันสำหรับแก้ไขโจทย์ "ตัวแปลงเลขต่างดาว" ที่สร้างขึ้นด้วย React และ TypeScript โปรเจกต์นี้แสดงให้เห็นถึงแนวทางการพัฒนาเว็บสมัยใหม่ ตั้งแต่การจัดการ State ด้วย React Hooks, การออกแบบสถาปัตยกรรมแบบ Component, และการรองรับหลายภาษา (i18n)

## ✨ Features (คุณสมบัติ)

✅ **Numeral Conversion:** Accurately converts alien numeral strings into integers. (แปลงเลขต่างดาวเป็นเลขจำนวนเต็ม)
✅ **Subtraction Rule Handling:** Correctly processes special subtraction rules (e.g., AB = 4, CR = 900). (จัดการเงื่อนไขการลบที่ซับซ้อน)
✅ **Randomizer:** A "Randomize" button to generate test inputs easily. (ปุ่ม "สุ่มค่า" เพื่อสร้างข้อมูลทดสอบ)
✅ **Bilingual Support (i18n):** Fully functional in both English and Thai with a language switcher. (รองรับ 2 ภาษา ทั้งไทยและอังกฤษ พร้อมปุ่มสลับภาษา)
✅ **Clean UI:** A clean, responsive user interface built with Tailwind CSS. (หน้าตาโปรแกรมสวยงามและรองรับทุกขนาดหน้าจอ)
✅ **Modern Tech Stack:** Built with Vite for a fast development experience. (ใช้ Vite เพื่อประสบการณ์การพัฒนาที่รวดเร็ว)

## 📝 The Challenge (โจทย์)

The goal is to convert a given string of "Alien Numerals" into an integer based on the following rules.

เป้าหมายคือการแปลงค่า String ของ "เลขต่างดาว" ให้เป็นเลขจำนวนเต็มตามกฎต่อไปนี้

#### Symbol Values (ค่าของสัญลักษณ์)

| Symbol | Value |
| :----: | ----: |
|   A    |     1 |
|   B    |     5 |
|   Z    |    10 |
|   L    |    50 |
|   C    |   100 |
|   D    |   500 |
|   R    |  1000 |

#### Rules (กฎการคำนวณ)

1.  **Addition:** Numerals are usually written from largest to smallest. In this case, their values are added together.
    * *Example:* `LBAAA` = 50 + 5 + 1 + 1 + 1 = 58.

2.  **Subtraction:** When a smaller value symbol appears before a larger value symbol, the smaller value is subtracted from the larger one.
    * `A` (1) can be placed before `B` (5) and `Z` (10) to make 4 and 9.
    * `Z` (10) can be placed before `L` (50) and `C` (100) to make 40 and 90.
    * `C` (100) can be placed before `D` (500) and `R` (1000) to make 400 and 900.
    * *Example:* `RCRZCAB` = `R` (1000) + `CR` (900) + `ZC` (90) + `AB` (4) = 1994.

## 🛠️ Tech Stack (เทคโนโลยีที่ใช้)

* **Framework:** [React.js](https://reactjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Internationalization:** [react-i18next](https://react.i18next.com/)

## 🚀 Getting Started (การรันโปรเจกต์ในเครื่อง)

To get a local copy up and running, follow these simple steps.

ทำตามขั้นตอนต่อไปนี้เพื่อรันโปรเจกต์ในเครื่องของคุณ

1.  **Clone the repository (คัดลอกโปรเจกต์):**
    ```sh
    git clone [https://github.com/piyawatSritavong/alienNumber.git](https://github.com/piyawatSritavong/alienNumber.git)
    ```

2.  **Navigate to the project directory (เข้าไปในโฟลเดอร์):**
    ```sh
    cd alienNumber
    ```

3.  **Install NPM packages (ติดตั้ง Dependencies):**
    ```sh
    npm install
    ```

4.  **Run the development server (รันโปรเจกต์):**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

*This project was created by [Piyawat Sritavong](https://github.com/piyawatSritavong).*