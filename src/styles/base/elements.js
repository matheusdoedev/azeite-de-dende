import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    h1,h2,h3 {
        font-family: var(--primary-font) !important;
        font-weight: 700;
        line-height: 1.15em;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.25rem;
    }

    h3 {
        font-size: 1.5rem;
    }
    
    p, a, label, input, button {
        font-family: var(--secondary-font);
        font-weight: 400;
    }
    
    p, label, input {
        font-size: .875rem;
        line-height: 1.5em;
    }

    a, button {
        font-size: 1.125rem;
        line-height: 1em;
    }
    
    
    section {
        padding: var(--gap-lg);
    }
`;

export default GlobalStyle;
