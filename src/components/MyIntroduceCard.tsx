import React, { useState } from "react";
import styled, { css } from "styled-components";

interface DetailItem {
  index: number;
  userName: string;
  detail: string;
  isOpen: boolean; //부모가 결정
  onToggle: () => void; // return 뒤에 아무값이 없을때
}

//style
const CardContainer = styled.div`
  overflow: hidden;
`;
const CardHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? "red" : "#ddd")};
  border-radius: ${({ $isOpen }) => ($isOpen ? "16px 16px 0 0" : " 16px")};

  border-bottom-color: ${({ $isOpen }) => ($isOpen ? "transparent" : "#ddd")};

  transition: all 0.3s ease-in-out;
  background-color: white;
  margin-bottom: -1px;
  z-index: 1;
  cursor: pointer;

  p {
    margin: 0; // 기본 마진 제거로 깔끔하게 정렬
    color: ${({ $isOpen }) =>
      $isOpen ? "red" : "inherit"}; // 열렸을 때 이름 색상 변경 (선택)
    transition: color 0.3s ease;
  }
`;

const CardBody = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "10px 20px" : "0 20px")};
  border: 1px solid ${({ $isOpen }) => ($isOpen ? "red" : "transparent")};
  border-top: none;
  border-radius: 0 0 16px 16px;

  /* 에니메이션 */
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
const MyIntroduceCard = ({
  userName,
  detail,
  isOpen,
  onToggle,
}: DetailItem) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleToggle = () => {
  //   setIsOpen((prev) => !prev);
  // };
  return (
    <CardContainer>
      <CardHeader $isOpen={isOpen} onClick={onToggle}>
        <p>{userName}</p>
        <button type="button">{isOpen ? "닫기" : "열기"}</button>
      </CardHeader>
      <CardBody $isOpen={isOpen}>{detail}</CardBody>
    </CardContainer>
  );
};

export default MyIntroduceCard;
