import { createLazyFileRoute, Link } from "@tanstack/react-router";
import BaseButton from "../components/base/button/BaseButton";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h3>
        Welcome To <b>Benvis</b>!
      </h3>
      <p>Your Open Source Task Manager</p>
      <Link to="/todo">Dokme</Link>
    </div>
  );
}
