import { createGlobalStyle } from "styled-components";
import ProductSansBold from "../../fonts/ProductSans-Bold.ttf";
import ProductSansLight from "../../fonts/ProductSans-Light.ttf";
import ProductSans from "../../fonts/ProductSans-Regular.ttf";
import { primaryColor } from "./Variables";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
    }
    
    body{
        box-sizing: border-box;
        font-family: 'Product Sans', sans-serif;
        background-color: ${primaryColor};
    }

    @font-face {
    font-family: 'Product Sans Bold';
    src: url(${ProductSansBold}) format('truetype');
    }

    @font-face {
    font-family: 'Product Sans Light';
    src: url(${ProductSansLight}) format('truetype');
    }
    
    @font-face {
    font-family: 'Product Sans';
    src: url(${ProductSans}) format('truetype');
    }
`;
