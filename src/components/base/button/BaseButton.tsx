import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonClasses = cva("flex items-center gap-2 p-2", {
  variants: {
    variant: {
      outlined: "bg-red-500",
      default: "bg-blue-700",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    state: {
      default: "hover:bg-blue-600",
      disabled: "bg-gray-300",
      loading: "bg-gray-300",
    },
    block: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export const BaseButton = ({
  size,
  state,
  block,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonClasses({ variant, size, state, block })}
      {...props}
    />
  );
};
