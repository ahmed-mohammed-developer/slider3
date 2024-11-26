import './slider.css'
import React,{useState} from 'react'
import SliderComp from './SliderComp'
import Title from '../Title'

function Slider() {
    const [siledValue, setSiledValue] = useState(0)

    const handleSilderValueChange = (e) => {
        setSiledValue(e.target.value)
    }

    let bgColor;
    let textColor;

    if(siledValue < 25 ){
        bgColor = "red";
        textColor  = "red";
    }
    
    if(siledValue < 25 && siledValue <= 50 ){
        bgColor = "blue";
    }
    if(siledValue > 51 && siledValue <= 75 ){
        bgColor = "green";
        textColor  = "white";
    }
    if(siledValue > 75 ){
        bgColor = "orange";
        textColor  = "white";
    }
    if(siledValue == 100 ){
        bgColor = "blue";
        textColor  = "white";
    }
  return (
    <div className='container text-center'>
        <Title text={"Slider To Grow"} className='mt-5 mb-4'/>
        <SliderComp setValue={siledValue} handleInput={handleSilderValueChange} bgColor={bgColor} textColor={textColor}/>
    </div>
  )
}

export default Slider