import { TSize, TState, TVariant } from "@/types/components/global.type";
import type { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSize;
  state?: TState;
  block?: boolean;
  variant?: TVariant;
}
export default function BaseButton({ children, ...props }: IProps) {
  return <button {...props}>{children}</button>;
}
