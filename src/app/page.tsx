import * as React from "react";
import { ButtonGrid } from "../components/buttonGrid";

export default function Page() {
  const buttons = [];
  for (let i = 0; i < 16; i++) {
    buttons.push(
      <button
        key={i}
        className="flex p-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
      >
        Button {i}
      </button>
    );
  }

  return <ButtonGrid>{buttons}</ButtonGrid>;
}
