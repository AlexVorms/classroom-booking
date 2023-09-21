
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCalendar from './components/Calendar/CustomCalendar/CustomCalendar';
import HomePage from './components/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/calendar" element={<CustomCalendar/>} ></Route>
      <Route  path="/" element={<HomePage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
