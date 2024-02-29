import * as React from "react";

type ButtonGridProps = {};

export const ButtonGrid = (
  props: React.PropsWithChildren<ButtonGridProps>
): React.ReactNode => {
  return <div className="grid grid-cols-4 gap-1">{props.children}</div>;
};
