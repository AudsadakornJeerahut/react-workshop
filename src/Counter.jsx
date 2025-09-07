// src/Counter.jsx
import React, { useState, useEffect } from 'react'; // import useEffect

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect จะทำงานหลังจากที่ component render เสร็จสิ้น
  useEffect(() => {
    // นี่คือ side effect ที่เราต้องการทำ
    console.log('Effect ทำงาน!');
    document.title = `คุณกดไปแล้ว ${count} ครั้ง`;

    // Dependency Array [count] หมายความว่า
    // effect นี้จะทำงานใหม่ "ก็ต่อเมื่อ" ค่า count เปลี่ยนแปลงเท่านั้น
  }, [count]);
  
  // ฟังก์ชันที่จะทำงานเมื่อปุ่มถูกคลิก
  const handleIncrement = () => {
    // ใช้ setCount เพื่ออัปเดตค่า state
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>ตัวนับเลข</h3>
      <p>คุณกดไปแล้ว: {count} ครั้ง</p>
      {/* ใช้ onClick เพื่อผูก Event เข้ากับฟังก์ชัน */}
      <button onClick={handleIncrement}>
        เพิ่มค่า +
      </button>
      <button onClick={handleDecrement} style={{ marginLeft: '8px' }}>
        ลดค่า -
      </button>
    </div>
  );
}

export default Counter;