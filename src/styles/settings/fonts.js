import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif:wght@700&display=swap');
     */
    :root {
        --primary-font: 'PT Serif', 'Georgia', serif;
        --secondary-font: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
    }
`;

export default GlobalStyle;
