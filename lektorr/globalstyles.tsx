import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-image: linear-gradient(
        to bottom,
        rgba(6, 64, 103, 0.85),
        rgba(10, 65, 102, 0.52)
      ),
      url('/wallpaper.png');
    background-size: 1100px;
    object-fit: cover;
    background-position: -360px -30px;
    background-repeat: no-repeat;

    @media only screen and (min-width: 900px) {
      background-size: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
