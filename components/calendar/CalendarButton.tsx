import React from 'react'
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from 'react-aria';
import { CalendarState } from 'react-stately'
import { Button } from '../ui/button';

export default function CalendarButton(props:AriaButtonProps<'button'> & {state?: CalendarState, side?: 'left' | 'right'}) {
  
    const ref = React.useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { focusProps } = useFocusRing();
    return (
        <Button variant={'ghost'} {...mergeProps(buttonProps,focusProps)} disabled={props.isDisabled} ref={ref}>
            {props.children}
        </Button>
  )
}
