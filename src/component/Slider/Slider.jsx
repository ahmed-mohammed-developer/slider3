import './slider.css'; // استيراد ملف الأنماط
import React, { useState } from 'react'; // استيراد React واستخدام hook useState
import SliderComp from './SliderComp'; // استيراد مكون SliderComp
import Title from '../Title'; // استيراد مكون Title

function Slider() {
    const [siledValue, setSiledValue] = useState(0); // تعريف حالة للسلايدر وتعيين القيمة الابتدائية إلى 0

    // دالة لمعالجة تغيرات قيمة السلايدر
    const handleSilderValueChange = (e) => {
        setSiledValue(e.target.value); // تحديث قيمة السلايدر عند تغييرها
    };

    let bgColor; // متغير لتحديد لون الخلفية
    let textColor; // متغير لتحديد لون النص

    // تعيين ألوان الخلفية والنص بناءً على قيمة السلايدر
    if (siledValue < 25) {
        bgColor = "red";
        textColor = "red";
    }

    if (siledValue >= 25 && siledValue <= 50) {
        bgColor = "blue";
    }
    if (siledValue > 51 && siledValue <= 75) {
        bgColor = "green";
        textColor = "white";
    }
    if (siledValue > 75) {
        bgColor = "orange";
        textColor = "white";
    }
    if (siledValue === 100) {
        bgColor = "blue";
        textColor = "white";
    }

    return (
        <div className='container text-center'>
            <Title text={"Slider To Grow"} className='mt-5 mb-4'/> {/* عرض عنوان */}
            <SliderComp 
                setValue={siledValue} 
                handleInput={handleSilderValueChange} 
                bgColor={bgColor} 
                textColor={textColor}
            /> {/* عرض مكون SliderComp مع تمرير الخصائص */}
        </div>
    );
}

export default Slider; // تصدير مكون Slider
