import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'
import CardPage from '@pages/Card'
import ScrollToTop from '@shared/ScrollToTop'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test" Component={Test} />
          <Route path="/card/:id" Component={CardPage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
