import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './components/pages/Signup'
import Signin from './components/pages/Signin'
import Offers from './components/Offers'
import Explore from './components/Explore'
import ForgotPassword from './components/pages/ForgotPassword'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Signin />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  )
}

export default App
