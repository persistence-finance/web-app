import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
   --background-primary: hsl(232, 20%, 14%);
   --background-secondary: hsl(229, 20%, 10%);
   --border-color: hsl(229, 15%, 22%);
   --primary-text-color: hsl(210, 92%, 85%);
   --main-text-color: hsl(228, 3%, 73%);
   --secondary-text-color: hsl(229 4% 53%);
   --bold-text-color: hsl(0, 0%, 100%);
   --white: hsl(0, 0%, 100%);
   --primary-color: hsl(262 86% 58%);
   --secondary-color: hsl(207 96% 52%);
   
   --primary-color-50: hsl(262 86% 58% / 50%);
   --secondary-color-50: hsl(207 96% 52% / 50%);
   
   --background-gradient: radial-gradient(ellipse at top, hsl(229, 20%, 27%), hsl(229, 20%, 10%));
   --border-gradient: linear-gradient(to bottom, var(--border-color), var(--background-primary));
   --border-radius: 16px;
   --border-size: 4px;
  }
 * {
   font-family: 'Genos', sans-serif;
   box-sizing: border-box;
   letter-spacing: 0.08rem;
   margin: 0;
   outline-color: var(--primary-color);
  }
  body {
    background-color: var(--background-primary);
  }
  html, body, #root {
    overflow-x: hidden;
    /* height: 100%; */
  }
`;

export const gradientBorderOuter = css`
  background-color: var(--background-primary);
  background: var(--border-gradient);
  border-radius: var(--border-radius);
  padding: var(--border-size);
`;

export const gradientBorderInner = css`
  background-color: var(--background-secondary);
  background: var(--background-gradient);
  border-radius: calc(var(--border-radius) - var(--border-size));
`;

export const Breakpoints = {
  Md: '@media (max-width: 768px)',
  Lg: '@media (max-width: 1175px)',
};
