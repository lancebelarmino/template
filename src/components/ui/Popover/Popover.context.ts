import { createContext } from '@utils';
import { PopoverBase } from './Popover.types';

type PopoverContext = PopoverBase;

export const [PopoverContextProvider, usePopoverContext] = createContext<PopoverContext>();
