import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './hoc/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage.js/PostPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRecoveryPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/create' element={<CreatePostPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register' element={<PasswordRecoveryPage />} />
      </Routes>
    </div>
  );
}

export default App;
