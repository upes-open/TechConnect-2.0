import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/landing/landing';
import Login from './components/login/login';
import Chapters from './components/chapters/chapters';
import Blogs from './components/blogs/blogs';
import Opportunities from './components/opportunities/opportunities';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/chapters' element={<Chapters />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/opportunities' element={<Opportunities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
