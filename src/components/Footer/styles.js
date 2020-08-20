import styled from "styled-components";

export const FooterBase = styled.footer
`
  background: var(.bg-ligth);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 60px;
  padding-bottom: 32px;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
