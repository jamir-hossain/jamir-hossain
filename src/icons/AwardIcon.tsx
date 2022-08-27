import React from "react";
import { SVGProps } from "react-html-props";

const AwardIcon = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.76-7.963-34.61-.1852-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.7 17.74 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.74 7.951 34.61 .1699 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM191.1 351.5c-8.029-4.002-20.8-15.34-37.48-19.79c-16.71-4.477-33.04-1.301-42.29-1.717c-4.953-7.838-10.39-23.65-22.51-35.76c-12.11-12.12-27.85-17.5-35.77-22.52C53.59 262.5 56.7 246.1 52.26 229.5c-4.465-16.71-15.77-29.39-19.79-37.48c3.996-8.025 15.33-20.77 19.8-37.5c4.434-16.6 1.33-32.88 1.697-42.27c7.854-4.971 23.63-10.37 35.78-22.52C101.8 77.68 107.3 61.72 112.3 53.95C121.4 53.58 137.9 56.69 154.5 52.25c16.74-4.475 29.33-15.74 37.48-19.79c8.027 3.992 20.77 15.33 37.49 19.8c16.74 4.471 33.01 1.295 42.28 1.711c4.84 7.65 10.45 23.71 22.51 35.76c12.03 12.04 28 17.61 35.77 22.52c.3555 9.273-2.752 25.64 1.693 42.28c4.469 16.71 15.77 29.38 19.79 37.47c-3.977 8-15.32 20.78-19.8 37.5c-4.404 16.49-1.34 32.1-1.695 42.27c-7.857 4.969-23.64 10.38-35.78 22.52c-12.03 12.03-17.59 27.99-22.5 35.75c-9.195 .4141-25.54-2.775-42.28 1.703C212.8 336.2 200.1 347.5 191.1 351.5zM279.1 192c0-48.7-39.39-88-87.1-88S104 143.3 104 192c0 48.58 39.39 88 87.1 88S279.1 240.6 279.1 192zM192 248C161.1 248 136 222.9 136 192c0-30.88 25.12-56 55.1-56S247.1 161.1 247.1 192C247.1 222.9 222.9 248 192 248zM357.4 370.1c-3.25-8.219-12.58-12.2-20.76-8.984c-8.203 3.25-12.23 12.55-8.984 20.77l24.22 61.25l-47.48-6.562l-24.64 42.28l-24.92-61.2c-3.328-8.203-12.72-12.14-20.84-8.781c-8.188 3.328-12.12 12.66-8.781 20.84l24.9 61.19C255.2 503.4 266.6 511.4 281.4 512c12.83 0 24.38-7.125 30.12-18.59l10.42-20.64l21.51 4.312c12.12 2.547 24.69-1.906 32.67-11.5c7.953-9.547 10.03-22.66 5.453-34.22L357.4 370.1zM150 408.9c-8.139-3.375-17.53 .5938-20.84 8.781l-24.92 61.2l-24.64-42.28l-47.44 6.547l24.17-61.23c3.25-8.219-.7813-17.52-8.984-20.77C39.14 357.9 29.86 361.9 26.61 370.1l-24.22 61.25c-4.578 11.56-2.5 24.67 5.453 34.22c8.016 9.625 20.52 14 32.61 11.52l21.58-4.328l10.41 20.62c5.766 11.45 17.27 18.58 31.42 18.58c13.42-.5313 24.98-8.609 30.03-21.05l24.92-61.2C162.2 421.5 158.2 412.2 150 408.9z" />
    </svg>
  );
};

export default AwardIcon;