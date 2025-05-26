import TodoList from "./components/TodoList"
import Index from "./routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>

  )
}

export default App
