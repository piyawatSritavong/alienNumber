import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

// กำหนดค่าตัวแปร
const alienValues: { [key: string]: number } = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
};

// คำนวณค่าจากการส่งค่าตัวอักษรที่ตรง หรือไม่ตรงกับตัวแปรที่กำหนดก็ได้
const calculateAlienToInt = (
  inputValue: string
): number | { errorKey: string; values?: Record<string, string> } => {
  
  // แปลงค่าเป็นตัวพิมพ์ใหญ่และตัดช่องว่าง
  const s = inputValue.toUpperCase().trim();

  // หากเป็นค่าว่างให้แสง error
  if (s === "") {
    return { errorKey: "error.enterValue" };
  }

  // วนลูปตามขนาดของค่าที่กรอกเข้ามา
  // โดยให้เริ่มต้นจาก 0
  let total = 0;
  try {
    for (let i = 0; i < s.length; i++) {

      // ดึงค่าปัจจุบัน
      const currentSymbol = s[i];
      // นำค่าปัจจุบันที่ได้ ไปค้นหาใน alienValues
      const currentValue = alienValues[currentSymbol];

      // หากค้นหาแล้วไม่ตรงให้แสดง error
      if (currentValue === undefined) {
        throw new Error(currentSymbol);
      }

      // ตรวจสอบค่าตัวถัดไป ในกรณีที่ต้องนำมาลบกัน
      if (i + 1 < s.length) {
        // ถ้ามีให้เก็บไว้
        const nextSymbol = s[i + 1];
        // และนำค่าทตัวถัดไปที่ได้ไปค้นหาใน alienValues
        const nextValue = alienValues[nextSymbol];

        // หากมีการลบ
        // เงื่อนไขแรกตัวถัดไปต้องมีค่า 
        // เงื่อนสองค่าปัจจุบันน้อยกว่าค่าถัดไป เช่น A(1) < B(5)
        if (nextValue !== undefined && currentValue < nextValue) {
          // นำค่าถัดไปลบด้วยค่าปัจจุบัน แล้วบวกเข้ากันใหม่ เช่น 5 - 1 = 4
          total += nextValue - currentValue;
          // จากนั้นเพิ่มค่า i ไปเรื่อยๆ เพื่อทำค่าตัวถัดไป
          i++;
        } else {
          // แต่ถ้าไม่เข้าเงื่อนไขการลบ ให้บวกปกติ
          total += currentValue;
        }
      } else {
      // ถ้าเป็นตัวค่าตัวสุดท้ายไม่มีตัวถัดไปแล้ว ให้นำค่าทั้งหมดมาบวกกัน
        total += currentValue;
      }
    }
    return total;
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorKey: "error.symbolNotFound",
        values: { symbol: error.message },
      };
    }
    return { errorKey: "error.unknown" };
  }
};

function App() {
  const { t, i18n } = useTranslation(); // สำหรับแปรงภาษา
  const [inputValue, setInputValue] = useState<string>("RCRZCAB"); // สำหรับเก็บค่าที่กรอกเข้ามา และแสดงค่าเริ่มต้น

  // ใช้ useMemo เก็บผลลัพธ์ของการคำนวณ และ render เมื่อมีค่าเปลี่ยนแปลง 
  // เนื่องจากต้องการให้ผลลัพธ์เปลี่ยนทุกครั้งเมื่อกรอกค่าใหม่
  // หากใช้ useEffect จะทำให้เกิดการคำนวณซ้ำทุกครั้งที่ render
  const result = useMemo(() => calculateAlienToInt(inputValue), [inputValue]);

  // ปุ่มเปลี่ยนภาษา
  const toggleLanguage = () => {
    const newLang = i18n.language === "th" ? "en" : "th";
    i18n.changeLanguage(newLang);
  };

  // ปุ่มสุ่มค่า
  const handleRandomize = () => {
    const symbols = ["A", "B", "Z", "L", "C", "D", "R"];
    let randomString = "";
    const length = Math.floor(Math.random() * 5) + 3; // สุ่มตัวอักษร 3-7 ตัว

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      randomString += symbols[randomIndex];
    }
    setInputValue(randomString);
  };

  // ตรวจสอบการเปลี่ยนแปลงของ input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // โดยปกติสามารถนำ result ไปแสดงผลได้เลยแบบนี้ {result}
  // แต่ต้องการจะแสดง error message หี่สามารถเปลี่ยนภาษาได้ 
  // จึงต้องสร้างฟังก์ชันการจัดการนี้ขึ้นมา
  const renderResult = () => {
    if (typeof result === "number") {
      return result;
    }
    if (typeof result === "object" && result.errorKey) {
      return t(result.errorKey, result.values);
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-xl">
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-1 px-3 rounded-full text-sm"
        >
          {i18n.language === "th" ? "EN" : "TH"}
        </button>

        <h1 className="text-3xl font-bold text-center mb-8">
          {t("headerTitle")}
        </h1>

        <div className="flex flex-wrap gap-x-2 gap-y-4 mb-8">
          <p className="text-sm">{t("valuesDefinition")}</p>
          {Object.entries(alienValues).map(([symbol, value]) => (
            <div
              key={symbol}
              className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {symbol} = {value}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-4 mb-8">
          <p className="text-sm">{t("examples")}</p>
          <div className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            AA = 2
          </div>
          <div className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            AB = 4
          </div>
          <div className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            ZLA = 41
          </div>
          <div className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            LBAAA = 58
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="alien-input" className="block text-sm mb-2">
            {t("formLabel")}
          </label>

          <div className="flex flex-row gap-4">
            <input
              id="alien-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={t("formPlaceholder")}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <button
              onClick={handleRandomize}
              className="w-32 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold py-3 px-4 rounded-md transition duration-300"
            >
              สุ่มค่า
            </button>
          </div>
        </div>

        <div className="p-6 text-center">
          <p className="text-lg">{t("resultLabel")}</p>
          <p
            className={`font-mono font-bold ${
              typeof result === "number" ? "text-4xl" : "text-2xl"
            }`}
          >
            {renderResult()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
