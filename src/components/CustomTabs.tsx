import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// animation
const fadeIn = keyframes`
  from {opacity:0; transform:translateY(2px)}
  to {opacity:1; transform:translateY(0)}
`;

// 개별 탭의 데이터 구조 정의
interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

// 탭 컴포넌트 자체의 옵션
interface TabProps {
  items: TabItem[];
  defaultActiveId?: string;
  $fullWidth?: boolean;
  // 탭 메뉴들이 부모 너비를 1/n로 나누어 꽉 채우게하고,
  // false(기본값)이면 글자 길이에 맞춰 나열된다.
  // 앞에 $을 붙여 styled-component에서만 쓰는 스타일 전용 프롭임을 명시햇다.
}

// style 정의
const TabContainer = styled.div`
  width: 100%;
`;
const TabList = styled.div<{ $fullWidth?: boolean }>`
  /* 이 스타일드 컴포넌트가 $fullWidth라는 이름의 변수(props)를 전달받을 수 있다고 선언하는것임. 
  ?가 붙어 있으면 이 값은 있어도 되고 없어도 되는 옵션이라는 뜻이다. */

  display: flex;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  gap: 20px;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      gap: 0;
      & > * {
        flex: 1;
      }
    `}
`;
const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? "#007bff" : "#6c757d")};
  position: relative;
  transition: all 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    left: 50%;
    bottom: -2px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: #007bff;
  }

  /* 활성화된 탭 밑줄 표시 */
  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        width: 100%;
        left: 0;
        background-color: #007bff;
      }
    `}
`;

const TabPanel = styled.div`
  padding: 20px 0;
  animation: ${fadeIn} 0.3s ease-out;
`;

const CustomTabs = ({ items, defaultActiveId, $fullWidth }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveId ?? items[0]?.id);
  return (
    <TabContainer>
      <TabList $fullWidth={$fullWidth} role="tablist">
        {items.map((item) => (
          <TabButton
            role="tab"
            id={`tab-${item.id}`}
            aria-controls={`panel-${item.id}`}
            key={item.id}
            tabIndex={item.id === activeTab ? 0 : -1}
            aria-selected={item.id === activeTab}
            $isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </TabButton>
        ))}
      </TabList>
      {items.map(
        (item) =>
          item.id === activeTab && (
            <TabPanel
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
            >
              {item.content}
            </TabPanel>
          ),
      )}
    </TabContainer>
  );
};

export default CustomTabs;
