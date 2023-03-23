import { background } from "@storybook/theming";
import React, { FunctionComponent } from "react";
import styled, { css, StyledComponent } from "styled-components";
import lockIcon from "../../assets/icons/lock-24px.svg";

export type buttonProps = {
  options?: buttonOptions;
  label?: string;
  onClick?: () => void;
};

export type buttonOptions = {
  isPrimary?: boolean;
  isInverted?: boolean;
  isLocked?: boolean;
  disabled?: boolean;
};

export const Button: FunctionComponent<buttonProps> = ({
  options = {
    isPrimary: true,
    isInverted: false,
    isLocked: false,
    disabled: false,
  },
  label,
  ...props
}) => {
  const { isLocked, disabled } = options;
  return (
    <StyledButton type="button" disabled={disabled} {...options} {...props}>
      {isLocked && <span></span>}
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<buttonOptions>`
  all: unset;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: var(--font-size-button);
  line-height: var(--line-height-button);
  letter-spacing: 1px;
  color: rgb(2, 156, 253);
  min-width: 11rem; /* 176px */
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 14px 20px;

  &:visited,
  &:focus {
    color: var(--color-text-01);
  }

  &:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: -2;
    ${({ isPrimary }) =>
      isPrimary &&
      css`
        background-color: var(--primary-action-color);
      `}
  }

  &:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 0;
    left: 0;
    top: 0;
    z-index: -1;
    transition: width 0.35s cubic-bezier(0.58, 0.3, 0.005, 1);
    background-color: var(--primary-action-color-dark);
  }

  &:hover::after {
    width: 100%;
  }

  ${({ isPrimary }) =>
    !isPrimary &&
    css`
      padding: 12px 18px;
      border: 2px solid var(--primary-action-color);

      &:visited,
      &:focus {
        border-color: var(--primary-action-color);
      }

      &:after {
        background-color: var(--primary-action-color);
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  
  ${({ isInverted }) =>
    isInverted &&
    css`
      border-color: var(--color-ui-01); /* white */

      &:visited,
      &:focus {
        border-color: var(--color-ui-01);
      }

      &:before {
        background-color: var(--color-ui-01);
      }

      &:after {
        background-color: var(--primary-action-color-dark);
      }
    `}

  ${({ isInverted, isPrimary }) =>
    isInverted &&
    !isPrimary &&
    css`
      border-color: var(--color-ui-01); /* white */

      &:visited,
      &:focus {
        border-color: var(--color-ui-01);
      }

      &:before {
        display: none;
      }

      &:after {
        background-color: var(--color-ui-01);
      }
    `}

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  ${({ isLocked }) =>
    isLocked &&
    css`
      & span {
        /* The height & overflow ensures that icon doesn't increase the height of the button itself */
        display: inline-block;
        width: 1.1rem;
        height: var(--font-size-button);
        margin-right: 0.5rem;
        overflow: visible;

        &:before {
          display: block;
          content: "";
          background-image: url("${lockIcon}");
          background-repeat: no-repeat;
          background-size: 18px;
          width: 1.1rem;
          height: 1.1rem;
        }
      }
    `}
`;
