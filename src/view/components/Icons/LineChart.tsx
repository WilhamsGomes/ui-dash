import { IIcon } from "../../../app/@types/Icon";

export default function LineChart({ width, height, className, onClick }: IIcon) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="lineChartIconTitle"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="currentColor"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title id="lineChartIconTitle">Line Chart</title>
        <path d="M3,16 L8,11"></path> <circle cx="9" cy="10" r="1"></circle>
        <circle cx="14" cy="15" r="1"></circle>
        <path d="M10 11L13 14M15 14L21 8"></path>
      </g>
    </svg>
  );
}
