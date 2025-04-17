import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'
import CardPage from '@pages/Card'
import ScrollToTop from '@shared/ScrollToTop'
import SignInPage from '@pages/SignIn'
import SignUpPage from '@pages/SignUp'
import NavBar from '@shared/NavBar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test" Component={Test} />
          <Route path="/card/:id" Component={CardPage} />
          <Route path="/signIn" Component={SignInPage} />
          <Route path="/signUp" Component={SignUpPage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
