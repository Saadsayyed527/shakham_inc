import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<"teacher" | "student">("student");

  const handleLogin = () => {
    login({ role });
    navigate(role === "teacher" ? "/teacher" : "/student");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <select onChange={(e) => setRole(e.target.value as "teacher" | "student")} className="p-2 border">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;