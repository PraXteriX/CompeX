import { AnchorHTMLAttributes, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

type linkOptions = {
  slim?: boolean;
};

export type linkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  href: string;
  options?: linkOptions;
};

export const Link: FunctionComponent<linkProps> = ({
  children,
  href,
  options = {
    slim: false,
  },
  ...props
}) => {
  const { slim } = options;
  return (
    <StyledLink href={href} {...options} {...props}>
      {slim ? <span>{children}</span> : children}
    </StyledLink>
  );
};

const StyledLink = styled.a<linkOptions>`
  ${({ slim }) =>
    slim
      ? css`
          text-decoration: none;
          font-weight: 600;
          color: var(--color-text-link);

          & span {
            /* Fix for Edge */
            width: calc(100%);
            background-image: linear-gradient(
              transparent calc(100% - 2px),
              var(--primary-color-high-contrast) 2px
            );
            background-repeat: no-repeat;
            background-size: 0 100%;
            border-radius: 1px;
            padding-bottom: 4px;
            transition: background-size 0.3s ease;

            &:focus {
              color: var(--color-text-link-focus);
              outline: 1px dotted #444;
            }
          }

          @media only screen and (min-width: 1024px) {
            &:hover span {
              background-size: 100% 100%;
            }
          }
        `
      : css`
          display: inline-block;
          color: var(--color-text-link);
          font-size: 0.875rem; /* 14px; */
          text-decoration: none;
          font-weight: 700;
          position: relative;
          letter-spacing: 1px;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-bottom: 0.3125rem; /* 5px; */
          text-transform: uppercase;
          line-height: 1.1875rem;

          &:after {
            display: block;
            border-top: 3px solid var(--primary-color-high-contrast);
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `}

  &:hover {
    color: var(--color-text-link-hover);

    &:after {
      animation: link-cta__hover-animation 0.7s
        cubic-bezier(0.58, 0.3, 0.005, 1);
    }
  }

  &:focus {
    color: var(--color-text-link-focus);
    outline: 1px dotted #444;
  }

  @keyframes link-cta__hover-animation {
    0% {
      left: 0;
      right: 0;
    }

    45% {
      left: 100%;
      right: 0;
    }

    55% {
      left: 0;
      right: 100%;
    }

    100% {
      left: 0;
      right: 0;
    }
  }
`;

export default Link;
