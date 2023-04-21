import React from "react";
import { cva } from "class-variance-authority";

interface ButtonProps {
  customClass?: string;
  label: string;
  onClickMethod: any;
  type?: "button";
  color?: string;
}

export default function Button({
  label,
  onClickMethod,
  type = "button",
  color = 'default',
  customClass
}: ButtonProps) {

  const finalStyles = cva(['mintoak-library-button'], {
    variants: {
      color: {
        gray: [ 'mintoak-library-grey-button' ],
        green: [ 'mintoak-library-green-button' ],
        default: [ 'mintoak-library-default-button' ]
      },
    }
  });

  return (
    <button
      type={type}
      className={`${finalStyles({ color } as Object)}${customClass ? ` ${customClass}` : ''}`}
      onClick={() => onClickMethod()}
    >
      {label}
    </button>
  );
}
