import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --gap: 1.5625rem;
        --gap-sm: 2.5625rem;
        --gap-md: 4.1875rem;
        --gap-lg: 6.8125rem;

        @media (max-width: 767.98px) {
            --gap-sm: 1.5625rem;
            --gap-md: 2.5625rem;
            --gap-lg: 4.1875rem;
        }
    }

`;

export default GlobalStyle;
