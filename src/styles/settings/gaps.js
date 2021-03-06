import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --gap-xs: .5rem;
        --gap: 1rem;
        --gap-sm: 1.5rem;
        --gap-md: 2rem;
        --gap-lg: 4rem;
        --gap-xl: 8rem;

        @media (max-width: 767.98px) {
            -gap-xs: .5rem;
            --gap: .5rem;
            --gap-sm: 1rem;
            --gap-md: 1.5rem;
            --gap-lg: 2rem;
            --gap-xl: 4rem;
        }
    }

`;

export default GlobalStyle;
