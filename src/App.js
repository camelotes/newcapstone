import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from './Admin/Sidebar/AdminNavbar.jsx';
import StudentNavbar from './Student/StudentNavbar/StudentNavbar.jsx';
import AdminDashboards from './Admin/Pages/AdminDashboard.jsx';
import AdminAnnouncements from './Admin/Pages/AdminAnnouncements.jsx';
import AdminEvents from './Admin/Pages/AdminEvents.jsx';
import AdminArticles from './Admin/Pages/AdminArticles.jsx';
import AdminTeachers from './Admin/Pages/AdminTeachers.jsx';
import AdminStudent from './zLandingpage/SplashScreen.jsx';
import AdminLogin from './zLandingpage/AdminLogin.jsx';
import AdminSignup from './zLandingpage/AdminSignup.jsx';
import StudentLogin from './zLandingpage/StudentLogin.jsx';
import StudentSignup from './zLandingpage/StudentSignup.jsx';
import StudentHomepage from './Student/pages/StudentHomepage.jsx';
import StudentEvents from './Student/pages/StudentEvents.jsx';
import StudentArticles from './Student/pages/StudentArticles.jsx';
import StudentFaQs from './Student/pages/StudentFaQs.jsx';
import StudentProfile from './Student/pages/StudentProfile.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Landing Pages */}
        <Route path='/' element={<AdminStudent />} />
        <Route path='/Admin/Login' element={<AdminLogin />} />
        <Route path='/Admin/Signup' element={<AdminSignup />} />
        <Route path='/Student/Login' element={<StudentLogin />} />
        <Route path='/Student/Signup' element={<StudentSignup />} />

        {/* Routes for Admin Pages */}
        <Route
          path='/Admin/*'
          element={
            <>
              <AdminNavbar />
              <Routes>
                <Route path='/Admin/Dashboard' element={<AdminDashboards />} />
                <Route path='/Admin/Announcements' element={<AdminAnnouncements />} />
                <Route path='/Admin/Events' element={<AdminEvents />} />
                <Route path='/Admin/Articles' element={<AdminArticles />} />
                <Route path='/Admin/Teachers' element={<AdminTeachers />} />
              </Routes>
            </>
          }
        />

        {/* Routes for Student Pages */}
        <Route
          path='/Student/*'
          element={
            <>
              <StudentNavbar />
              <Routes>
                <Route path='/Student/Homepage' element={<StudentHomepage />} />
                <Route path='/Student/Events' element={<StudentEvents />} />
                <Route path='/Student/Articles' element={<StudentArticles />} />
                <Route path='/Student/FaQs' element={<StudentFaQs />} />
                <Route path='/Student/Profile' element={<StudentProfile />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
