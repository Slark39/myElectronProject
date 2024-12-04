import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoard from '../page/dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}
