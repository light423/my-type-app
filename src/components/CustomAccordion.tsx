import React, { useState } from "react";
import styled, { css } from "styled-components";

// 1. 스타일 정의
const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const ItemWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const HeaderButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &::after {
    content: "▼";
    transition: transform 0.3s;
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const PanelWrapper = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) =>
    $isOpen ? "1000px" : "0"}; /* 내용에 따라 조절 */
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background: #fafafa;
  padding: ${({ $isOpen }) => ($isOpen ? "16px 20px" : "0 20px")};
`;

// type
interface AccordionProps {
  multiple?: boolean; //여러개 열기 허용 여부
}

export const CustomAccordion = ({
  children,
  multiple = false,
}: AccordionProps) => {
  // 열려있는 인덱스를 배열로 관리
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  console.log(openIndices);

  const handleToggle = (index: number) => {
    console.log("클릭한 인덱스:", index);
    if (multiple) {
      // multiple 모드 : 배열에 있으면 제거(닫기), 없으면 추가(열기)
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      //single 모두 : 이미 열린거면 닫고, 아니면 해당 인덱스만 배열에 넣기
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <Container>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            isOpen: openIndices.includes(index),
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </Container>
  );
};

export const CustomAccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}) => {
  return (
    <ItemWrapper>
      <HeaderButton $isOpen={!!isOpen} onClick={onToggle}>
        {title}
      </HeaderButton>
      <PanelWrapper $isOpen={!!isOpen}>{children}</PanelWrapper>
    </ItemWrapper>
  );
};

export default CustomAccordion;
