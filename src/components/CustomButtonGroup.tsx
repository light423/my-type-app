import React from "react";
import styled, { css } from "styled-components";

// 1. 타입 정의
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  $direction?: "row" | "column";
  $gap?: number;
  $align?: "flex-start" | "center" | "flex-end" | "stretch";
  $justify?: "center" | "flex-start" | "flex-end" | "space-between";
  $wrap?: boolean;
  className?: string;
  $fullWidth?: boolean;
  $responsive?: boolean; //모바일 대응 여부
}

// style
const StyleCustomButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  gap: ${({ $gap }) => $gap ?? 8}px;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  /* 세로 정렬시 버튼 너비를 꽉 차게 설정 하고 싶을때 */
  ${({ $direction }) =>
    $direction === "column" &&
    css`
      & > * {
        width: 100%;
      }
    `}
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      & > * {
        flex: 1;
        width: 100%;
      }
    `}

  /* 모바일 대응 */
  ${({ $responsive }) =>
    $responsive &&
    css`
      @media (max-width: 768px) {
        flex-direction: column;
        & > * {
          width: 100%;
        }
      }
    `}
`;

function CustomButtonGroup({
  children,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <StyleCustomButtonGroup className={className} {...props}>
      {children}
    </StyleCustomButtonGroup>
  );
}

export default CustomButtonGroup;
