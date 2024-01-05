import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { motion, spring } from 'framer-motion';
import Particles from 'react-particles';
import particlesConfig from './config/configParticles';

import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
    <div className='mainDiv' style={{ position: 'relative', overflow: "hidden" }} >
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <motion.div className='name-con'
        initial= {{opacity: 0}}
        animate= {{opacity: 1}}
        transition={{duration: 2}}
      >
        <motion.h1 className='name'
          initial= {{ y: '-100vh' }}
          animate= {{y: 0 }}
          transition={{type: 'spring' , stiffness: 50 }}
        >Salman Murtaza</motion.h1>

        <nav>
          <motion.ul
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{duration: 2}}
          >
            <motion.li
              initial= {{x: -60 , opacity: 0}}
              animate= {{x: 0 , opacity: 1}}
              transition={{type: 'spring' , stiffness: 50}}
            ><Link to='/projects'>Projects</Link></motion.li>

            <motion.li
              initial= {{x: -60 , opacity: 0}}
              animate= {{x: 0 , opacity: 1}}
              transition={{type: 'spring' , stiffness: 50 , delay: 0.5}}
            ><Link to='/about'>About</Link></motion.li>

            <motion.li
              initial= {{x: -60 , opacity: 0}}
              animate= {{x: 0 , opacity: 1}}
              transition={{type: 'spring' , stiffness: 50 , delay: 0.7}}
            ><Link to='/contact'>Contact</Link></motion.li>
          </motion.ul>
        </nav>
      </motion.div>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/about'
          element={<About/>}
        />
        <Route
          path='/projects'
          element={<Projects/>}
        />
        <Route
          path='/contact'
          element={<Contact/>}
        />
      </Routes>
      
    </div>
  );
}

export default App;
