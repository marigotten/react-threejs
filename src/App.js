/** @jsx jsx */
import { css, jsx, Global} from '@emotion/core';
import emotionReset from 'emotion-reset';
import { VFXProvider } from 'react-vfx';
import * as VFX from 'react-vfx';
// import { Work } from './work';
// import { Vfx } from './vfx';

const globalStyles = css`
${emotionReset}
*, *::after, *::before {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
font-smoothing: antialiased;
}
body {
  background-color: #333;
  text-align: center;
}
h1 {
  display: block;
  font-size: 3.2rem;
  color: #fff;
  font-weight: 900;
}
`;


const App = () => {
return (
<div>
  <Global styles={globalStyles} />
  <VFX.VFXProvider>

  <h1>React VFXで<br />遊んでみた</h1>
  <VFX.VFXImg src="logo512.png" alt="react logo" shader="sinewave"/>
  <VFX.VFXSpan shader="rgbshift">Hi there!</VFX.VFXSpan>
  <VFX.VFXImg
      alt="tom and jerry"
      src="tom-jerry-1.gif"
      shader="halftone"/>
  <VFX.VFXImg
      alt="tom and jerry"
      src="otamu.jpg"
      shader="glitch"/>
  </VFX.VFXProvider>
</div>
);
};

export default App;