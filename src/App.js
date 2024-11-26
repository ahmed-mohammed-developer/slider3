import './App.css'; // استيراد ملفات CSS للتنسيق
import Slider from './component/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap
function App() {
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
