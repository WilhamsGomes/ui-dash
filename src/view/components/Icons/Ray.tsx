import { IIcon } from "../../../app/@types/Icon";

export default function Ray({ width, height, className, onClick }: IIcon) {
  return (
    <svg
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 538.842 538.842"
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
        <g>
          <g>
            <polygon points="392.326,200.43 325.083,200.43 423.691,0 280.813,0 133.933,298.54 210.513,298.54 115.151,538.842 "></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}
