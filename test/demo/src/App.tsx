import "maishu-jueying/src/style"
import { Routes, Route } from "react-router-dom"

function App() {
  return <Routes>
    <Route path="/home" element={<div>Hello World</div>} />
  </Routes>
}

export default App;

