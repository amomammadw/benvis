import { Route, Routes } from "react-router";
import "./assets/App.css";
import { routes } from "./data/routes";
import BottomNavigation from "./components/layout/BottomNavigation";

function App() {
  return (
    <div className="overflow-hidden p-0">
      <main className=" h-[calc(100dvh-64px)] overflow-auto">
        <div className="container">
          <Routes>
            {routes.map(({ element, path }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default App;
