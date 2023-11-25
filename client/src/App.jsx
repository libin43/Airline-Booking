import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import { PageNotFound } from './pages/PageNotFound';
import { IndexPage } from './pages/IndexPage';
import { UserSignIn } from './pages/UserSignIn';
import './App.css'
import { UserRoutes } from './routes/userRoutes';

export const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<IndexPage/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/signin" element={<UserSignIn/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
