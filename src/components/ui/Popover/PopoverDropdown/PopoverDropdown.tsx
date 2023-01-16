import { ReactNode } from 'react';
import clsx from 'clsx';
import { usePopoverContext } from '../Popover.context';
import styles from './PopoverDropdown.module.scss';

interface PopoverDropdownProps {
  children: ReactNode;
}

function PopoverDropdown({ children }: PopoverDropdownProps) {
  const { opened, position, customDropdown, withArrow } = usePopoverContext();

  if (customDropdown) {
    return <>{children}</>;
  }

  return (
    <>
      {opened && (
        <div className={clsx(styles.dropdown, styles[`dropdown--${position}`])}>
          {children}
          {withArrow && <div className={clsx(styles.arrow, styles[`arrow--${position}`])} />}
        </div>
      )}
    </>
  );
}

export default PopoverDropdown;
