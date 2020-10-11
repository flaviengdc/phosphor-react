/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="176"
            y1="88"
            x2="64"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="64 104 64 200 160 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="208"
            y1="40"
            x2="48"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <line
            x1="176"
            y1="88"
            x2="64"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 104 64 200 160 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="40"
            x2="48"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M170.34277,82.34277,72,180.68579V104a8,8,0,0,0-16,0v96c0,.26349.01416.52686.04.78937.01123.118.03369.23248.05029.34887.02.142.03662.28437.06494.4253.02588.13238.0625.2608.09522.39081.03076.1231.0581.24688.09472.36877.03858.1272.08643.25.13135.37439.04346.12189.0835.24457.1333.36462.04737.11481.10352.22486.15625.33686.0586.12518.11426.25134.18018.3739.05566.10406.11963.20288.17969.30414.07324.1231.14257.24743.22314.36737.07227.108.15283.20916.23047.31329.07812.10541.15186.2132.23584.31555.13281.16193.27588.31507.4209.46594.03711.03852.06885.08008.10644.11805.03858.03808.08008.07.11914.10717.15039.145.30371.28772.46534.4206.10009.0824.20556.15436.30908.23114.10644.079.21.1615.32031.23529.11768.07879.23975.14722.36035.21911.10352.06159.20459.12665.311.18366.1206.06464.24463.11938.36816.17737.11377.05371.22559.11053.34229.15893.11816.04895.23925.08844.35937.13141.126.04541.251.09387.37988.133.11963.03613.24122.06262.36231.09308.13184.03338.26269.07037.397.097.13965.02765.28028.044.42041.06415.11817.01691.23389.03925.353.051C63.47314,207.986,63.73633,208,64,208h96a8,8,0,0,0,0-16H83.31445l98.34278-98.34277a8.00053,8.00053,0,0,0-11.31446-11.31446Z" />
            <path d="M208,32H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="176"
            y1="88"
            x2="64"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="64 104 64 200 160 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="208"
            y1="40"
            x2="48"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="176"
            y1="88"
            x2="64"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="64 104 64 200 160 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="208"
            y1="40"
            x2="48"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="176"
            y1="88"
            x2="64"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 104 64 200 160 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="40"
            x2="48"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowLineDownLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

ArrowLineDownLeft.displayName = "ArrowLineDownLeft";

export default ArrowLineDownLeft;