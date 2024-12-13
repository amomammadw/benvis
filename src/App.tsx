import { Route, Routes } from "react-router";
import "./assets/App.css";
import { routes } from "./data/routes";
import BottomNavigation from "./components/layout/BottomNavigation";

function App() {
  return (
    <div className="overflow-hidden">
      <main className="container h-[calc(100dvh-80px)] overflow-auto">
        <Routes>
          {routes.map(({ element, path }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default App;
