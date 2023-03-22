import styled from "styled-components";

export const Text = styled.h1`
   text-align: ${({align}) => align ? align: ""};
   margin-top: ${({mt}) => mt ? mt : "0px"};
   font-size: ${({fs}) => fs ? fs : ""};
   font-weight: ${({fw}) => fw ? fw : ""};
   font-family: ${({ff}) => ff ? ff : ""};
   font-style: ${({fStyle}) => fStyle ? fStyle : ""};
   line-height: ${({lineH}) => lineH ? lineH : ""};
   color: ${({color}) => color ? color : ""};
   

`;