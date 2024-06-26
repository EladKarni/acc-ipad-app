import clsx from "clsx";
import Panel from "../Panel/Panel";
import { colorOptions } from "@/stores/colorStore";
import { useTogglesStore } from "@/stores/togglesStore";

type IconGoodProps = {
  word: string;
  strokeColor: string;
  strokeWidth: string;
  iconColor: colorOptions;
};

const iconColorStyles = (
  iconColor: colorOptions,
  isDesaturateColors: boolean,
  isDarkerColors: boolean
) => {
  switch (iconColor) {
    case "white":
      return "fill-white";
    case "black":
      return "fill-black";
    case "gray":
      return "fill-gray";
    case "red":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-red-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-red-desaturated";
      } else if (isDarkerColors) {
        return "fill-red-dark";
      }
      return "fill-red";
    case "blue":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-blue-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-blue-desaturated";
      } else if (isDarkerColors) {
        return "fill-blue-dark";
      }
      return "fill-blue";
    case "green":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-green-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-green-desaturated";
      } else if (isDarkerColors) {
        return "fill-green-dark";
      }
      return "fill-green";
    case "yellow":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-yellow-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-yellow-desaturated";
      } else if (isDarkerColors) {
        return "fill-yellow-dark";
      }
      return "fill-yellow";
    case "purple":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-purple-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-purple-desaturated";
      } else if (isDarkerColors) {
        return "fill-purple-dark";
      }
      return "fill-purple";
    case "orange":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-orange-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-orange-desaturated";
      } else if (isDarkerColors) {
        return "fill-orange-dark";
      }
      return "fill-orange";
    case "skintone1":
      return "fill-skintone1";
    case "skintone2":
      return "fill-skintone2";
    case "skintone3":
      return "fill-skintone3";
    case "skintone4":
      return "fill-skintone4";
    case "skintone5":
      return "fill-skintone5";
    case "skintone6":
      return "fill-skintone6";
    default:
      return "fill-white";
  }
};

const IconGood = ({ strokeWidth, strokeColor, iconColor }: IconGoodProps) => {
  const { isDesaturateColors, isDarkerColors } = useTogglesStore();
  return (
    <Panel word="Good">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className="bg-[#ABEBFF] rounded-lg"
      >
        <g className={"fill-black"}>
          <path d="M210.92,453.72v25.09h-7.2l-.86-2.57c-3,2.16-6.47,3.24-10.43,3.24-6.12,0-10.87-2.09-14.26-6.27-3.39-4.18-5.08-10.01-5.08-17.5,0-4.8.88-8.99,2.64-12.58,1.76-3.59,4.25-6.35,7.46-8.29,3.21-1.94,6.98-2.91,11.29-2.91,3.74,0,7.01.72,9.81,2.15s4.83,3.42,6.11,5.97l-5.42,4.76c-1.1-1.72-2.54-3.03-4.32-3.93-1.78-.9-3.82-1.35-6.11-1.35-3.87,0-6.84,1.39-8.88,4.16-2.05,2.77-3.07,6.78-3.07,12.02,0,5.5.95,9.67,2.84,12.51s4.64,4.26,8.25,4.26c2.91,0,5.53-.7,7.86-2.11v-9.91h-10.04v-6.74h19.41Z" />
          <path d="M220.76,474.91c-2.99-3.04-4.49-7.24-4.49-12.61s1.5-9.57,4.49-12.61c2.99-3.04,7.15-4.56,12.48-4.56s9.5,1.52,12.51,4.56c3.01,3.04,4.52,7.24,4.52,12.61s-1.51,9.57-4.52,12.61c-3.01,3.04-7.19,4.56-12.51,4.56s-9.49-1.52-12.48-4.56ZM239.58,470.29c1.54-1.94,2.31-4.6,2.31-7.99s-.77-6.05-2.31-7.99c-1.54-1.94-3.65-2.91-6.34-2.91s-4.79.97-6.31,2.91c-1.52,1.94-2.28,4.6-2.28,7.99s.76,6.05,2.28,7.99c1.52,1.94,3.62,2.91,6.31,2.91s4.8-.97,6.34-2.91Z" />
          <path d="M258.99,474.91c-2.99-3.04-4.49-7.24-4.49-12.61s1.5-9.57,4.49-12.61c2.99-3.04,7.15-4.56,12.48-4.56s9.5,1.52,12.51,4.56c3.01,3.04,4.52,7.24,4.52,12.61s-1.51,9.57-4.52,12.61c-3.01,3.04-7.19,4.56-12.51,4.56s-9.49-1.52-12.48-4.56ZM277.81,470.29c1.54-1.94,2.31-4.6,2.31-7.99s-.77-6.05-2.31-7.99c-1.54-1.94-3.65-2.91-6.34-2.91s-4.79.97-6.31,2.91c-1.52,1.94-2.28,4.6-2.28,7.99s.76,6.05,2.28,7.99c1.52,1.94,3.62,2.91,6.31,2.91s4.8-.97,6.34-2.91Z" />
          <path d="M296.14,474.75c-2.49-3.15-3.73-7.47-3.73-12.98,0-3.35.57-6.27,1.72-8.78,1.14-2.51,2.78-4.45,4.92-5.81,2.14-1.36,4.63-2.05,7.5-2.05,1.94,0,3.64.33,5.12.99,1.47.66,2.76,1.67,3.86,3.04h.13v-19.35h8.39v40.21c0,4.58.07,7.51.2,8.78h-7.93c-.04-.75-.07-2.2-.07-4.36h-.13c-1.01,1.5-2.41,2.71-4.19,3.63-1.78.93-3.64,1.39-5.58,1.39-4.31,0-7.71-1.57-10.2-4.72ZM313.57,470.99c1.39-1.34,2.08-3.11,2.08-5.32v-6.8c0-2.16-.73-3.94-2.18-5.35-1.45-1.41-3.28-2.11-5.48-2.11-2.33,0-4.12.9-5.35,2.71-1.23,1.81-1.85,4.4-1.85,7.79,0,3.57.62,6.31,1.85,8.22,1.23,1.92,3.01,2.87,5.35,2.87s4.19-.67,5.58-2.02Z" />
        </g>
        <g
          className={clsx(
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors),
            strokeWidth,
            strokeColor
          )}
        >
          <g>
            <path d="M365.46,194.76h21.14c6.2,0,11.82-2.52,15.89-6.58,4.03-4.04,6.53-9.59,6.58-15.73.08-12.45-10.42-22.63-22.87-22.63h-114.47c-1.87,0-3.39-1.52-3.39-3.4,0-.94.38-1.78.99-2.4.62-.61,1.47-.99,2.4-.99h15.74v-47.73c0-26.22-21.25-47.47-47.46-47.47v48.86c0,14.3-6.09,27.92-16.74,37.45l-36.31,32.52.29-.3c-12.76,11.39-21.4,27.92-22.41,46.11v74.69c1.93,34.95,30.88,62.69,66.32,62.69h129.08c6.2,0,11.82-2.52,15.89-6.58,4.02-4.03,6.53-9.59,6.58-15.72.09-12.45-10.42-22.64-22.87-22.64h-11.96c-.94,0-1.78-.38-2.39-.99s-.99-1.46-.99-2.39c0-1.87,1.51-3.38,3.38-3.38h21.37c6.2,0,11.83-2.51,15.89-6.58s6.58-9.68,6.58-15.89c0-12.4-10.06-22.46-22.47-22.46h-12.55c-1.87,0-3.38-1.52-3.38-3.38h0c0-1.87,1.51-3.39,3.38-3.39h21.69c6.2,0,11.82-2.51,15.89-6.57,4.06-4.08,6.58-9.69,6.58-15.89,0-12.41-10.06-22.47-22.47-22.47h-12.93c-1.87,0-3.38-1.52-3.38-3.38s1.51-3.38,3.38-3.38Z" />
            <path
              className="fill-gray"
              d="M135.78,169.82h-24.05c-12.31,0-22.29,9.98-22.29,22.29v115.45c0,12.31,9.98,22.29,22.29,22.29h24.05c12.31,0,22.29-9.98,22.29-22.29v-20.24c-.07-1.3-.11-2.59-.11-3.9v-67.18c0-1.23.04-2.46.11-3.69v-20.44c0-12.31-9.98-22.29-22.29-22.29Z"
            />
          </g>
          <path d="M395.35,200.19c4.45-1.39,8.52-3.84,11.92-7.23,5.46-5.48,8.5-12.74,8.56-20.46.05-7.71-2.97-15.03-8.5-20.6-5.58-5.62-13.28-8.84-21.13-8.84h-84.66c-.14-.02-.28-.03-.42-.03h-6.89v-47.73c0-29.91-24.32-54.23-54.22-54.23h-6.76v55.62c0,12.36-5.28,24.17-14.49,32.42l-35.99,32.22h-.02c-7.92,7.06-14.2,15.74-18.45,25.28-2.57-13.4-14.38-23.55-28.52-23.55h-24.05c-16.02,0-29.05,13.03-29.05,29.05v115.45c0,16.02,13.03,29.05,29.05,29.05h24.05c14.09,0,25.87-10.08,28.5-23.41,11.43,25.67,37.19,43.41,66.88,43.41h129.08c7.8,0,15.14-3.04,20.66-8.56s8.51-12.74,8.57-20.45c.05-7.71-2.96-15.03-8.5-20.6-1.16-1.17-2.41-2.23-3.73-3.19,4.75-1.34,9.1-3.87,12.68-7.46,5.52-5.52,8.56-12.86,8.56-20.67,0-9.68-4.73-18.27-12-23.59,4.71-1.35,9.02-3.87,12.58-7.43,5.52-5.54,8.56-12.88,8.56-20.67,0-9.8-4.85-18.49-12.27-23.8ZM378.39,246.45h-21.69c-1.87,0-3.38,1.52-3.38,3.38h0c0,1.87,1.51,3.39,3.38,3.39h12.55c12.41,0,22.47,10.06,22.47,22.46,0,6.21-2.52,11.82-6.58,15.89s-9.69,6.58-15.89,6.58h-21.37c-1.87,0-3.38,1.51-3.38,3.38,0,.93.38,1.78.99,2.39s1.45.99,2.39.99h11.96c12.45,0,22.96,10.19,22.87,22.64-.05,6.13-2.56,11.69-6.58,15.72-4.07,4.06-9.69,6.58-15.89,6.58h-129.08c-35.44,0-64.39-27.74-66.32-62.69v-74.69c1.01-18.19,9.65-34.72,22.41-46.11l-.29.3,36.31-32.52c10.65-9.53,16.74-23.15,16.74-37.45v-48.86c26.21,0,47.46,21.25,47.46,47.47v47.73h-15.74c-.93,0-1.78.38-2.4.99-.61.62-.99,1.46-.99,2.4,0,1.88,1.52,3.4,3.39,3.4h114.47c12.45,0,22.95,10.18,22.87,22.63-.05,6.14-2.55,11.69-6.58,15.73-4.07,4.06-9.69,6.58-15.89,6.58h-21.14c-1.87,0-3.38,1.51-3.38,3.38s1.51,3.38,3.38,3.38h12.93c12.41,0,22.47,10.06,22.47,22.47,0,6.2-2.52,11.81-6.58,15.89-4.07,4.06-9.69,6.57-15.89,6.57ZM135.78,329.85h-24.05c-12.31,0-22.29-9.98-22.29-22.29v-115.45c0-12.31,9.98-22.29,22.29-22.29h24.05c12.31,0,22.29,9.98,22.29,22.29v20.44c-.07,1.23-.11,2.46-.11,3.69v67.18c0,1.31.04,2.6.11,3.9v20.24c0,12.31-9.98,22.29-22.29,22.29Z" />
        </g>
      </svg>
    </Panel>
  );
};

export default IconGood;
