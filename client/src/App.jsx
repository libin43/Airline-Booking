import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { UserRegister } from './pages/UserRegister';
import { PageNotFound } from './pages/PageNotFound';
import { IndexPage } from './pages/IndexPage';

export const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<IndexPage/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
