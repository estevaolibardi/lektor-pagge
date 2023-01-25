import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
    font-family: 'Lexend', sans-serif;
       
      
  }

  

  h1{
    margin: 0;
  }

  p{
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .swiper {
    width: 350px;
    height: 100%;

    @media screen and (min-width: 1440px) {
      width: 660px;
    height: 100%;
    }
    
  }

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffff;
  width: 300px;
  height: 170px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  /* width: 100px;
  height: 35px; */
  object-fit: cover;
}
`;

export default GlobalStyle;
