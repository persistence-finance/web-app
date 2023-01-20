import React from 'react';
import { DismissButton, Overlay, usePopover, useOverlayTrigger } from 'react-aria';
import {
  useOverlayTriggerState,
  OverlayTriggerState,
  OverlayTriggerProps,
} from 'react-stately';
import styled from 'styled-components';

interface PopoverProps {
  triggerRef: React.RefObject<HTMLDivElement>;
  state: OverlayTriggerState;
  offset?: number;
}

export const Popover = ({
  children,
  state,
  offset = 8,
  ...props
}: React.PropsWithChildren<PopoverProps>) => {
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state,
  );

  return (
    <Overlay>
      <Underlay {...underlayProps} />
      <div {...popoverProps} ref={popoverRef} className="popover">
        <Arrow {...arrowProps} data-placement={placement}>
          <path d="M0 0,L6 6,L12 0" />
        </Arrow>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

export interface PopoverTriggerProps {
  content: React.ReactElement;
}

export const PopoverTrigger = ({
  children,
  content,
  ...props
}: React.PropsWithChildren<PopoverTriggerProps & OverlayTriggerProps>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref,
  );

  return (
    <>
      {React.cloneElement(children as React.ReactElement, {
        ...triggerProps,
        ref,
      })}
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {React.cloneElement(content, overlayProps)}
        </Popover>
      )}
    </>
  );
};

export const Underlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--underlay);
`

export const Arrow = styled.svg`
  position: absolute;
  fill: var(--border-color);
  stroke: var(--border-color);
  stroke-width: 1px;
  width: 12px;
  height: 12px;

  &[data-placement='top'] {
    top: 100%;
    transform: translateX(-50%);
  }

  &[data-placement='bottom'] {
    bottom: 100%;
    transform: translateX(-50%) rotate(180deg);
  }

  &[data-placement='left'] {
    left: 100%;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[data-placement='right'] {
    right: 100%;
    transform: translateY(-50%) rotate(90deg);
  }
`;
