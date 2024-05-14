"use client"

import {memo} from "react";

interface ButtonSolidProps {
  text: string;
  clickHandler?: (args: any) => void;
}

const ButtonSolid = memo<ButtonSolidProps>(({
  text,
  clickHandler
                                            }) => {
  return (
    <button
      className={`flex items-center justify-center bg-c-primary px-6 py-1 rounded-2xl z-10 text-c-text-dark border-b-[3px] border-b-c-primary
      hover:bg-c-primary-darken hover:text-c-text-light`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
});
ButtonSolid.displayName = "ButtonSolid";

export default ButtonSolid;