import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

//styled
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    top {
      opacity: 1;
    }
  }
`;
const ModalContainer = styled.div`
  background-color: #fff;

  border-radius: 12px;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    top {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const ModalTitle = styled.h2`
  padding: 16px;
  font-size: 16px;
  text-align: left;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`;
const ModalButtonGroup = styled.div`
  padding: 16px;
  display: flex;
  gap: 8px;

  button {
    flex: 1;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   본문 스크롤 방지 로직
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  // 이벤트
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" onClick={toggleModal}>
        모달열기
      </button>
      {isOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>알림</ModalTitle>
            <ModalContent>팝업 내용</ModalContent>
            <ModalButtonGroup>
              <button type="button" onClick={toggleModal}>
                취소
              </button>
              <button type="button" onClick={toggleModal}>
                확인
              </button>
            </ModalButtonGroup>
            <CloseButton>닫기</CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
