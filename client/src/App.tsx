import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import TeacherDashboard from "./pages/teacher/teacherDashboard";
import StudentDashboard from "./pages/student/studentDashBoard";
import LoginPage from "./pages/default/loginPage";
import ProtectedRoute from "./middleware/protectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/teacher" element={<ProtectedRoute element={<TeacherDashboard />} role="teacher" />} />
          <Route path="/student" element={<ProtectedRoute element={<StudentDashboard />} role="student" />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;