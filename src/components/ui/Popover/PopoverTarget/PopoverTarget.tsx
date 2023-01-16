import { ReactNode } from 'react';

interface PopoverTargetProps {
  children: ReactNode;
}

function PopoverTarget({ children }: PopoverTargetProps) {
  return <div>{children}</div>;
}

export default PopoverTarget;
