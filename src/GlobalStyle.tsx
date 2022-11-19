import { createGlobalStyle } from "styled-components";
import Background from "./images/background.png";
export const Globalstyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0px;
    padding:0;
}
    body{
        height: 100vh;
        width:100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Space Grotesk', sans-serif;
        background-repeat: no-repeat;
        background-size: 100% 30%;
        background-image: url(${Background});
        overflow: hidden;      
        @media screen and (min-width: 1440px){
            background-size: 30% 100%;
        }
    }
`;
