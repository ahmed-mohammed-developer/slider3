import React from 'react';

function SliderComp({ setValue, handleInput, textColor, bgColor }) {
    // تعريف أسلوب CSS للسلايدر
    const sliderStyle = {
        appearance: "none",
        width: "80%",
        height: 25,
        background: "lightgray",
        cursor: "pointer",
        opacity: 0.7,
        borderRadius: "20px",
        padding: "0px 10px"
    };

    return (
        <div className='container' style={{
            gap: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {/* إدخال سلايدر */}
            <input 
                type="range" 
                min={0} 
                max={100} 
                value={setValue} 
                onInput={handleInput} 
                style={sliderStyle}
            />
            {/* عرض قيمة السلايدر في دائرة ملونة */}
            <div style={{
                color: !textColor ? "black" : textColor,
                background: !bgColor ? "lightgray" : bgColor,
                height: `${setValue * 3}px`,
                width: `${setValue * 3}px`,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%"
            }}>
                <span>{setValue}</span>
            </div>
        </div>
    );
}

export default SliderComp; // تصدير مكون SliderComp
