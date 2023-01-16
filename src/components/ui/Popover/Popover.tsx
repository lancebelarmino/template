import { ReactNode } from 'react';
import PopoverDropdown from './PopoverDropdown/PopoverDropdown';
import PopoverTarget from './PopoverTarget/PopoverTarget';
import { PopoverContextProvider } from './Popover.context';
import { PopoverBase } from './Popover.types';
import styles from './Popover.module.scss';

interface PopoverProps extends PopoverBase {
  children: ReactNode;
}

export default function Popover(props: PopoverProps) {
  const { children, opened = false, position = 'bottom', customDropdown = false, withArrow = true } = props;

  return (
    <PopoverContextProvider value={{ opened, position, customDropdown, withArrow }}>
      <div className={styles.root}>{children}</div>
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
