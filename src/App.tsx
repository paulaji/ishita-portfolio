import { Route, Routes } from 'react-router-dom';

import { Blog } from './Blog';
import { FirstPage } from './FirstPage';
import { Navbar } from './Navbar';
import { Work } from './Work';
import { Blog1 } from './Blog1';
import { Contact } from './Contact';
import { About } from './About';
import Posts from './Posts';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <FirstPage /> */}
      {/* <Navbar /> */}
      {/* <Blog /> */}
      {/* <Work /> */}
      {/* <Blog1 /> */}

      {/* <Blog2 /> */}
      {/* <Blog3 /> */}
      {/* <Contact /> */}
      {/* <About /> */}

      <Routes>
        <Route path='/My-Portfolio' element={<FirstPage />}></Route>
        <Route path='/' element={<FirstPage />}></Route>
        <Route
          path='/Blog'
          element={
            <div>
              <Navbar />
              <Blog />
            </div>
          }
        ></Route>
        <Route
          path='/work'
          element={
            <div>
              <Navbar />
              <Work />
            </div>
          }
        ></Route>
        <Route
          path='/blog1'
          element={
            <div>
              <Navbar />
              <Blog1 />
            </div>
          }
        ></Route>
        <Route
          path='/contact'
          element={
            <div>
              <Navbar />
              <Contact />
            </div>
          }
        ></Route>
        <Route
          path='/about'
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        ></Route>
        <Route
          path='/posts'
          element={
            <div>
              <Navbar />
              <Posts />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
