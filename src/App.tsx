import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test" Component={Test} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
