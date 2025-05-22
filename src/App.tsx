import TodoList from "./pages/TodoList"
import Index from "./routes"


function App() {

  return (
    // <Index />
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        할 일 목록
      </h1>
      <TodoList />
    </div>
  )
}

export default App
