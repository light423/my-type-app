import React from "react";
import styled, { css } from "styled-components";

// 1. 타입 정의
// 버튼의 스타일 옵션을 정의한다.
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: "primary" | "secondary" | "outline" | "ghost";
  $size?: "sm" | "md" | "lg";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  $fullWidth?: boolean;
  className?: string;
  label?: string;
  $isVertical?: boolean;
  children?: React.ReactNode;
}

// 2. 스타일 정의
// 버튼의 스타일과 조건부 스타일을 정의한다
const StyledButton = styled.button<CustomButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $isVertical }) => ($isVertical ? "column" : "row")};
  white-space: nowrap;
  gap: 8px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  /* varient 스타일 분기 */
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: #007bff;
      color: #fff;
      border: none;
      &:hover {
        background-color: #0056b3;
      }
      &:disabled {
        background-color: yellow;
      }
    `}
  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background-color: #6c757d;
      color: #fff;
      border: none;
      &:hover {
        background-color: #0056b3;
      }
      &:disabled {
        background-color: red;
      }
    `};
  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background-color: #fff;
      color: #007bff;
      border: 1px solid #007bff;
      &:hover {
        background-color: #0056b3;
      }
      &:disabled {
        background-color: yellow;
      }
    `};
  ${({ $variant }) =>
    $variant === "ghost" &&
    css`
      background-color: transparent;
      color: #007bff;
      border: none;
      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }
      &:disabled {
        background-color: yellow;
      }
      &:hover {
        background-color: #0056b3;
      }
      &:disabled {
        background-color: yellow;
      }
    `};

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 6px 12px;
      font-size: 12px;
    `};
  ${({ $size }) =>
    $size === "md" &&
    css`
      padding: 8px 14px;
      font-size: 14px;
    `};
  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 10px 16px;
      font-size: 16px;
    `};
  svg {
    width: 1.25em;
    height: 1.25em;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;

const CustomButton = ({
  label,
  $variant,
  $size,
  prefixIcon,
  suffixIcon,
  disabled,
  className,
  $fullWidth = false,
  $isVertical = false,
  onClick,
  ...props //나머지 html버튼 속성들(onClick, type 등)을 한번에 받음
}: CustomButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };
  return (
    <StyledButton
      $variant={$variant}
      $size={$size}
      $fullWidth={$fullWidth}
      className={className}
      disabled={disabled}
      onClick={handleClick}
      $isVertical={$isVertical}
      {...props} // 여기에 이미 children이 포함될 수 있으므로 주의
    >
      {prefixIcon}
      {label || children}
      {suffixIcon}
    </StyledButton>
  );
};

export default CustomButton;
