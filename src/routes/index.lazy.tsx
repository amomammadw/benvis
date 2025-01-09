import BaseButton from "@/components/base/button/BaseButton";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <h3>
        Welcome To
        <a
          className="font-bold underline mx-1 transition-all hover:text-blue-500"
          href="https://github.com/amomammadw/benvis"
          target="_blank"
        >
          Benvis
        </a>
        !
      </h3>
      <p>Your Open Source Task Manager</p>

      <BaseButton>Get Startedsssss</BaseButton>
    </div>
  );
}
