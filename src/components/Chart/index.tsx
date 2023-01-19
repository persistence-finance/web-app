import React, { PropsWithChildren, useState } from 'react';
import { usePopover } from 'react-aria';
import { OverlayTriggerState, useOverlayTriggerState } from 'react-stately';
import styled from 'styled-components';
import { Creative, NormalMesh, StandardMesh } from '../Creative';
import { Arrow } from '../Popover';
import { gradientBorderInner, gradientBorderOuter } from '../Theme';

interface BarChartProps {
  series: [number, number][]
  popover: React.ReactElement
}

export const BarChart = ({ series, popover, ...props }: BarChartProps) => {
  const [hover, setHover] = useState<[number, number]|null>(null)
  const [selected, setSelected] = useState<[number, number]|null>(null)

  const creativeRef = React.useRef<HTMLDivElement|null>(null);
  const triggerRef = React.useRef<HTMLDivElement|null>(null);
  const state = useOverlayTriggerState(props);

  return (
    <Outer>
      <Inner onPointerOut={() => state.close()}>
        <Creative ref={creativeRef}>
          {new Array(10).fill(0).map((_, i, arr) => <StandardMesh key={i} position={[0, i - Math.floor(arr.length / 2), -0.15]}>
            <boxGeometry args={[12, 0.01, 0.01]} />
          </StandardMesh>)}
          {series.map((v, i, arr) => 
          <NormalMesh 
            key={v[1]}
            scale={state.isOpen && selected === v ? [1, 1, 2] : 1}
            position={[(i - Math.floor(arr.length / 2)) * (10 / arr.length + 0.05), - 3 + v[1] / 2, 0]} 
            onPointerOut={(ev) => {
              setHover(null)
            }}
            onPointerOver={(ev: any) => {
              const point = {
                x: ev.clientX,
                y: ev.clientY,
              }
              triggerRef.current = {
                getBoundingClientRect: () => {
                  if (creativeRef.current) {
                    const rect = creativeRef.current.getBoundingClientRect().toJSON()
                    const height = (v[1] / rect.height) * 1000;
                    console.log({height, pointX: point.x, pointY: point.y })
                    return new DOMRect(
                      point.x,
                      rect.y,
                      1,
                      rect.height
                    )
                  }
                  return point
                }
              } as HTMLDivElement;

              if (hover !== v) {
                setSelected(v)
                setHover(v)
                state.close()
                setTimeout(() => {
                  state.open()
                })
              }
            }}
          >
            <boxGeometry args={[10 / arr.length, v[1], 10 / arr.length]} />
          </NormalMesh>)}
        </Creative>

        {selected && state.isOpen && (
          <ChartPopover {...props} triggerRef={triggerRef} state={state}>
            {React.cloneElement(popover, { date: selected[0], value: selected[1] })}
          </ChartPopover>
        )}
      </Inner>
    </Outer>
  )
}

interface ChartPopoverProps {
  triggerRef: React.RefObject<HTMLDivElement>;
  state: OverlayTriggerState;
  offset?: number;
}

const ChartPopover = ({ children, triggerRef, state, offset = 8, ...props }: PropsWithChildren<ChartPopoverProps>) => {
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { popoverProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      triggerRef,
      popoverRef,
    },
    state,
  );

  return <div {...popoverProps} ref={popoverRef} className="popover">
    <Arrow {...arrowProps} data-placement={placement}>
      <path d="M0 0,L6 6,L12 0" />
    </Arrow>
    {children}
  </div>
}

const Outer = styled.div`
  ${gradientBorderOuter}
`;

const Inner = styled.div`
  ${gradientBorderInner}
  height: 200px;
`;