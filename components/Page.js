import React from 'react';
import Header from './Header';

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
   }

   *, *:before, *:after {
     box-sizing: inherit;
   }

   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding: 0;
   margin: 0;
   font-size: 1.5rem;
   line-height: 2;
   }
   a{
     text-decoration: none;
   }
   a:hover{
     text-decoration: underline;
   }
   button{
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }
`; 

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;
function Page(props) {
  return (
    <div>
      <GlobalStyles/>  
      <Header/>
      {/* Rendering Children here with props.children */}
      <InnerStyles>{props.children}</InnerStyles>
    </div>
  );
}

export default Page;
