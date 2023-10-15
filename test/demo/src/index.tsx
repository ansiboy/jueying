import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "maishu-jueying/out/design/create-design-element"
import HomePage from './pages/home';
import TempPage from './pages/temp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(<BrowserRouter>
//   <Routes>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/temp' element={<TempPage />} />
//   </Routes>
// </BrowserRouter>
// );
root.render(<HomePage />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
