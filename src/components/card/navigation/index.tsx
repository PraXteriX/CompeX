import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

type navigationCardOptions = {
  isMultiple?: boolean;
  imageSize?: 'normal' | 'large' | undefined;
  decoratorLabel?: string;
};

export type navigationCardProps = {
  children?: string;
  image?: { src: string; alt: string };
  title: string;
  href?: string;
  options?: navigationCardOptions;
  loading?: boolean;
};

export const NavigationCard: FunctionComponent<navigationCardProps> = ({
  children,
  image,
  title,
  href,
  options = { isMultiple: false, imageSize: 'normal' },
  loading = false,
}) => {
  const { decoratorLabel } = options;
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper {...(href ? { href: href, as: 'a' } : { as: 'div' })} {...options}>
      {decoratorLabel && <Label>{decoratorLabel}</Label>}
      <ImageWrapper>
        <Image src={image?.src} alt="" />
      </ImageWrapper>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div<navigationCardOptions>`
  display: flex;
  max-width: 15rem;
  min-width: 15rem;
  width: 100%;
  padding: 1.25rem;
  box-shadow: var(--card-shadow);
  border-radius: var(--card-border-radius);
  background-color: var(--color-ui-01);
  position: relative;
  transition: box-shadow 0.2s ease-out, -webkit-box-shadow 0.2s ease-out;
  text-decoration: none;
  color: var(--color-text-link);

  &:visited {
    text-decoration: none;
    color: var(--color-text-link);
  }

  ${({ isMultiple }) =>
    isMultiple
      ? css`
          &:before,
          &:after {
            content: '';
            max-width: 20rem;
            transition: 0.2s all ease;
            width: 100%;
            min-height: 100%;
            position: absolute;
            border-radius: var(--card-border-radius);
            box-shadow: var(--card-shadow);
          }

          &:before {
            top: 2px;
            left: 2px;
            z-index: -3;
            transform: rotate(-2deg);
          }

          &:after {
            top: 0;
            left: 0;
            z-index: -4;
            transform: rotate(2deg);
          }

          &:hover::before,
          &:hover:after {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          &:hover::before {
            transform: rotate(-4deg);
          }

          &:hover:after {
            transform: rotate(4deg);
          }
        `
      : css`
          &:hover {
            transform: translateY(-3px);
            box-shadow: var(--card-shadow-hover);
          }
        `}

  @media only screen and (min-width: 768px) {
    min-height: 20rem;
    text-align: center;
    flex-direction: column;

    ${({ isMultiple }) =>
      !isMultiple &&
      css`
        transition: transform 0.2s ease-out, box-shadow 0.2s ease,
          -webkit-transform 0.2s ease-out, -webkit-box-shadow 0.2s ease;
      `}
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 20rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  position: absolute;
  top: 0.75rem;
  left: 0;
  font-size: 0.6875rem;
  line-height: 2.9;
  letter-spacing: 0.79px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: rgba(255, 204, 51, 0.8);
  padding: 0.125rem 0.875rem;

  element {
  }

  @media only screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 2.29;
    letter-spacing: 1px;
    padding: 0.4375rem 1.0625rem;
  }
`;

const ImageWrapper = styled.div<navigationCardOptions>`
  width: 4.875rem; /* 78px */
  height: 4.875rem;
  margin-right: var(--default-padding);
  align-self: center;
  flex: 0 0 auto;
  object-fit: scale-down;

  ${({ imageSize }) =>
    imageSize === 'large' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 0;
    `}

  @media only screen and (min-width: 767px) {
    width: 100%;
    height: auto;
    max-width: 9.25rem; /* 148px */
    max-height: 9.25rem;
    margin: 0.5rem auto 0.75rem auto;
  }

  @media only screen and (max-width: 767px) {
    height: auto;
    width: 95px;
    flex: 0 0 auto;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    position: relative;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;

  @media only screen and (max-width: 767px) {
    min-width: 100%;
    max-width: none;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;

const Title = styled.h4`
  text-transform: none;
  font-weight: 600;
  color: var(--color-text-01);
  font-size: 1rem;
  line-height: 1.625;
  padding-bottom: 0.3125rem; /* 5px */
  letter-spacing: normal;
`;

const Body = styled.span`
  display: block;
  font-size: 0.875rem; /* 14px */
  line-height: 1.7;
  letter-spacing: 0.15px;
`;

const Loading: FunctionComponent = () => {
  return (
    <StyledLoader>
      {Array(4)
        .fill(true)
        .map((_, i) => (
          <span></span>
        ))}
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 20rem;
  min-width: 15rem;
  width: 100%;
  min-height: 20rem;
  padding: 1.25rem;
  box-shadow: var(--card-shadow);
  border-radius: var(--card-border-radius);
  background-color: var(--color-ui-01);
  position: relative;

  & span {
    display: block;
    content: '';
    margin: 0 auto;
    background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
    background-size: 500px 100px;
    animation-name: moving-gradient;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  & span:first-of-type {
    margin-top: 0.5rem;
    height: 128px;
    width: 128px;
  }

  & span:nth-of-type(2) {
    height: 1.5rem;
    width: 50%;
  }

  & span:nth-of-type(3),
  & span:nth-of-type(4) {
    height: 1.25rem;
    width: 100%;
  }

  @keyframes moving-gradient {
    0% {
      background-position: -250px 0;
    }
    100% {
      background-position: 250px 0;
    }
  }
`;

export default NavigationCard;
