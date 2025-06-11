import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "headerTitle": "Alien Numbers",
      "valuesDefinition": "Given that:",
      "examples": "Examples:",
      "formLabel": "Enter the value to convert:",
      "formPlaceholder": "e.g., LBAAA",
      "randomButton": "Randomize",
      "resultLabel": "Result is:",
      "error.enterValue": "Please enter a value",
      "error.symbolNotFound": "Symbol '{{symbol}}' not found",
      "error.unknown": "An unknown error occurred",
    },
  },
  th: {
    translation: {
      "headerTitle": "Alien Numbers",
      "valuesDefinition": "โดยกำหนดให้:",
      "examples": "ตัวอย่าง:",
      "formLabel": "กรอกค่าที่ต้องการแปลง:",
      "formPlaceholder": "เช่น LBAAA",
      "randomButton": "สุ่มค่า",
      "resultLabel": "ผลลัพธ์คือ:",
      "error.enterValue": "กรุณาใส่ค่าที่ต้องการ",
      "error.symbolNotFound": "ไม่พบสัญลักษณ์ '{{symbol}}'",
      "error.unknown": "เกิดข้อผิดพลาดที่ไม่รู้จัก",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;