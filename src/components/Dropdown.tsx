import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

// styled
const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  margin: 50px auto;
  display: inline-block;
  min-width: 150px;
  max-height: 40px;
`;
const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
  text-align: left;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s;
  &:hover {
    border-color: #333;
  }
`;
const OptionList = styled.ul<{ isOpen: boolean; height: number }>`
  position: absolute;
  top: 102%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0; //높이 계산을 위해 패딩은 0 또는 item에서 처리
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  transform-origin: top;
  transition:
    height 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out; /* animation */
  ${(props) =>
    props.isOpen
      ? css`
          height: ${props.height}px;
          opacity: 1;
          transform: scaleY(1);
          border: 1px solid #ddd;
        `
      : css`
          height: 0;
          opacity: 0;
          transform: scaleY(0.95);
          border: 1px solid transparent;
        `};
`;
const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const Dropdown = () => {
  const options = ["사과", "바나나", "포도", "오렌지", "ddd"];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [contentHeight, setContentHeight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  //   높이 측정
  useEffect(() => {
    if (listRef.current) {
      setContentHeight(listRef.current.scrollHeight);
    }

    // 외부클릭 감지 로직
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectButton onClick={toggleSelect}>{selected}</SelectButton>
      <OptionList isOpen={isOpen} ref={listRef} height={contentHeight}>
        {options.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </SelectWrapper>
  );
};

export default Dropdown;
