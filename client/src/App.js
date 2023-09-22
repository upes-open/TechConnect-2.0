import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/landing/landing';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
