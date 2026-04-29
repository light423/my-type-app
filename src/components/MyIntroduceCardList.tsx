import React, { useState } from "react";
import MyIntroduceCard from "./MyIntroduceCard";

const MyIntroduceCardList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mockDate = [
    { userName: "김철수", detail: "프론트개발자" },
    { userName: "이영희", detail: "디자이너" },
    { userName: "박지성", detail: "리액트" },
  ];
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {mockDate.map((item, index) => (
        <MyIntroduceCard
          key={index}
          userName={item.userName}
          detail={item.detail}
          isOpen={openIndex === index} //내 인덱스가 열림 상태인지 확인
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default MyIntroduceCardList;
