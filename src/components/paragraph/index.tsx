import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

export type paragraphOptions = {
  size: 'x-small' | 'small' | 'normal';
};

export type paragraphProps = {
  children: React.ReactNode;
  options: paragraphOptions;
};

export const Paragraph: FunctionComponent<paragraphProps> = ({
  children,
  options = { size: 'normal' },
}) => {
  return <StyledParagraph {...options}>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p<paragraphOptions>`
  padding-bottom: var(--default-padding);

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 0.875rem;
      line-height: 1.57;
      font-weight: 400;

      @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 0.9375rem;
        line-height: 1.6;
        letter-spacing: 0;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.625;
      }
    `}

  ${({ size }) =>
    size === 'x-small' &&
    css`
      font-size: 0.875rem;
      line-height: 1.57;
    `}
`;

export default Paragraph;
