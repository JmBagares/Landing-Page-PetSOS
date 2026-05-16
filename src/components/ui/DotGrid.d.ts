declare module "@/components/ui/DotGrid" {
  import { CSSProperties, FC } from "react";

  interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    proximity?: number;
    speedTrigger?: number;
    shockRadius?: number;
    shockStrength?: number;
    maxSpeed?: number;
    resistance?: number;
    returnDuration?: number;
    className?: string;
    style?: CSSProperties;
  }

  const DotGrid: FC<DotGridProps>;
  export default DotGrid;
}
