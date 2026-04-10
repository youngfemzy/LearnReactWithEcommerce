import { createContext } from "react";
import { useState } from "react";
import { set } from "react-hook-form";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: JSON.parse(localStorage.getItem("currentUserEmail")) }
      : null,
  );

  function signup(email, password) {
    // Simulate a signup process
    const user = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let findIfUserExists = user.find((eachUser) => eachUser.email === email);
    if (findIfUserExists) {
      alert("User already exists, please login");
      return { success: false, error: "User already exists" };
    }
    const newUser = { email, password };
    user.push(newUser);
    localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("currentUserEmail", JSON.stringify(email));

    setUser({ email });

    return { success: true };
  }

  function login(email, password) {
    const user = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    let findIfUserExists = user.find(
      (eachUser) => eachUser.email === email && eachUser.password === password,
    );
    if (!findIfUserExists) {
      return { success: false, error: "Invalid email or password" };
    }

    localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("currentUserEmail", JSON.stringify(email));

    setUser({ email });

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signup, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
