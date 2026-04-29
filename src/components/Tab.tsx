import React, { useState } from "react";
import styled, { css } from "styled-components";

interface TabProps {
  id: number;
  label: string;
  content: string;
}

//style 정의
const TabContainer = styled.div`
  background-color: antiquewhite;
`;
const TabButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const TabButton = styled.button`
  width: 100%;
  height: 100%;
`;

const TabContent = styled.div`
  background-color: red;
`;
const Tab = () => {
  const tabData = [
    { id: 1, label: "메뉴1", content: "첫번째 탭입니다" },
    { id: 2, label: "메뉴2", content: "두번째 탭입니다" },
    { id: 3, label: "메뉴3", content: "세번째 탭입니다" },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <TabContainer>
      <TabButtonGroup>
        {tabData.map((item) => (
          <TabButton
            type="button"
            key={item.id}
            isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </TabButton>
        ))}
      </TabButtonGroup>
      <TabContent>
        {tabData.find((item) => item.id === activeTab)?.content}
      </TabContent>
    </TabContainer>
  );
};

export default Tab;
