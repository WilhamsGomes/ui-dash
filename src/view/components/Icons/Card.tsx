import { IIcon } from "../../../app/@types/Icon";

export default function Card({ width, height, className, onClick }: IIcon) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
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
        <title></title>
        <g data-name="Layer 15" id="Layer_15">
          <path d="M25.12,6H6.88A3.89,3.89,0,0,0,3,9.89V21.11A3.89,3.89,0,0,0,6.88,25H25.12A3.89,3.89,0,0,0,29,21.11V9.89A3.89,3.89,0,0,0,25.12,6ZM6.88,8H25.12A1.89,1.89,0,0,1,27,9.89V11H5V9.89A1.89,1.89,0,0,1,6.88,8ZM25.12,23H6.88A1.89,1.89,0,0,1,5,21.11V13H27v8.11A1.89,1.89,0,0,1,25.12,23Z"></path>
          <path d="M24,19H19a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Z"></path>
        </g>
      </g>
    </svg>
  );
}
