import './sass/main.scss'


import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import SocialButton from './components/SocialButton';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SocialButton />
    </>
  );
}

export default App;
