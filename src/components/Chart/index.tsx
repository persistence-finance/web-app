import { gradientBorderOuter, gradientBorderInner } from '../Theme';
import { Creative, StandardMesh, NormalMesh } from '../Creative';
import styled from 'styled-components';

interface BarChartProps {
  series: [number, number][]
}

export const BarChart = ({ series }: BarChartProps) => {
  return (
    <Outer>
      <Inner>
          <Creative>
            {new Array(10).fill(0).map((_, i, arr) => <StandardMesh key={i} position={[0, i - Math.floor(arr.length / 2), -0.15]}>
              <boxGeometry args={[12, 0.01, 0.01]} />
            </StandardMesh>)}
            {series.map((v, i, arr) => 
            <NormalMesh key={v[1]} position={[(i - Math.floor(arr.length / 2)) * (10 / arr.length + 0.05), - 3 + v[1] / 2, 0]}>
              <boxGeometry args={[10 / arr.length, v[1], 10 / arr.length]} />
            </NormalMesh>)}
          </Creative>
      </Inner>
    </Outer>
  )
}

const Outer = styled.div`
  ${gradientBorderOuter}
`;

const Inner = styled.div`
  ${gradientBorderInner}
  height: 200px;
`;