import React, { useState } from "react";
import styled from "styled-components";

// type 정의 : poops로 데이터 리스트를 받도록 수정
interface AccordionProps {
  items: DataItem[];
}
interface DataItem {
  id: number;
  label: string;
  content: React.ReactNode;
}

// style 정의
const AccordionContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  overflow: hidden;
`;
const AccordionWrapper = styled.div`
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: aqua;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f9f9f9;
  }
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
const AccordionBody = styled.div<{ $isOpen: boolean }>`
  display: grid;
  /* 핵심: grid의 0fr -> 1fr 전환은 max-height보다 훨씬 부드럽습니다 */
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background-color: #fafafa;
`;
const InnerWrapper = styled.div`
  min-height: 0;
  overflow: hidden;
`;
const InnerContent = styled.div`
  padding: 20px;
  line-height: 1.5;
  color: #444;
  white-space: pre-wrap;
`;

const Accordion = ({ items }: AccordionProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    //id는 내가 클릭할때 어디를 눌렀는지 알려주는 매개변수
    setActiveId(activeId === id ? null : id);
  };

  return (
    <AccordionContainer>
      {items.map((item) => (
        <AccordionWrapper key={item.id}>
          <AccordionHeader
            type="button"
            onClick={() => handleToggle(item.id)}
            $isOpen={activeId === item.id}
          >
            {item.label}
          </AccordionHeader>
          <AccordionBody $isOpen={activeId === item.id}>
            <InnerWrapper>
              <InnerContent>{item.content}</InnerContent>
            </InnerWrapper>
          </AccordionBody>
        </AccordionWrapper>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
