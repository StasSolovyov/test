// src/routes.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AnimationPage from "./pages/AnimationPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:animationName" element={<AnimationPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
