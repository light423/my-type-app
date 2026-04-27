import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import {
  Accordion,
  Board,
  CustomButton,
  CustomButtonGroup,
  CustomTabs,
} from "./components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
function App() {
  const [count, setCount] = useState(0);

  const tabItems = [
    {
      id: "profile",
      label: "프로필",
      content: "<div>사용자 프로필 정보입니다.</div>",
    },
    {
      id: "settings",
      label: "설정",
      content: "<div>사용자 설정 정보입니다.</div>",
    },
    {
      id: "notification",
      label: "알림",
      content: "<div>사용자 알림 정보입니다.</div>",
    },
  ];
  const tabItems2 = [
    {
      id: "profile22",
      label: "프로필2222",
      content: "<div>사용자 프로필2222 정보입니다.</div>",
    },
    {
      id: "settings22",
      label: "설정2222",
      content: "<div>사용자 설정2222 정보입니다.</div>",
    },
    {
      id: "notification22",
      label: "알림2222",
      content: "<div>사용자 알림2222 정보입니다.</div>",
    },
  ];

  const noticeList = [
    { id: 1, label: "타이틀1", content: "컴텐츠1" },
    { id: 2, label: "타이틀2", content: "컴텐츠2" },
    { id: 3, label: "타이틀3", content: "컴텐츠3" },
  ];

  return (
    <>
      <section id="center">
        <Accordion items={noticeList} />
        <div className="flex gap-6" style={{ width: "100%" }}>
          <h2>direction column</h2>
          <CustomButtonGroup $direction="column">
            <CustomButton label="레이블" $variant="primary" $size="sm" />
            <CustomButton
              label="primary disabled 레이블"
              $variant="primary"
              $size="sm"
              disabled
            />
            <CustomButton label="레이블" $variant="secondary" $size="sm" />
            <CustomButton
              label="secondary disabled 레이블"
              $variant="secondary"
              $size="sm"
              disabled
            />
            <CustomButton
              label="primary 레이블"
              $variant="primary"
              $size="sm"
            />
          </CustomButtonGroup>
          <h2>justify center / wrap</h2>
          <CustomButtonGroup
            $justify="space-between"
            $wrap
            style={{ backgroundColor: "#000", padding: "10px" }}
          >
            <CustomButton
              label="primary direction wrap 레이블"
              $variant="primary"
              $size="sm"
            />
            <CustomButton
              label="ghost wrap 레이블"
              $variant="ghost"
              $size="sm"
            />
            <CustomButton
              label="secondary wrap 레이블"
              $variant="secondary"
              $size="sm"
            />
            <CustomButton
              label="outline wrap 레이블"
              $variant="outline"
              $size="sm"
            />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap h레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton
              label="fullWidth 레이블"
              $variant="primary"
              $size="sm"
            />
            <CustomButton
              label="fullWidt h레이블"
              $variant="primary"
              $size="sm"
            />
            <CustomButton
              label="fullWidth 레이블"
              $variant="primary"
              $size="sm"
            />
          </CustomButtonGroup>
          <h2>justify start / nowrap </h2>
          <CustomButtonGroup>
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap h레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap h레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap h레이블" $variant="primary" $size="sm" />
            <CustomButton label="wrap 레이블" $variant="primary" $size="sm" />
          </CustomButtonGroup>
          <CustomButton label="sm 커스텀 버튼" $variant="primary" $size="sm" />
          <CustomButton
            label="md 커스텀 버튼"
            $variant="secondary"
            $size="md"
          />
          <CustomButton
            label="full 커스텀 버튼"
            $variant="secondary"
            $size="md"
            $fullWidth
          />
          <CustomButton
            label=" 아이콘 top  버튼"
            $variant="outline"
            $size="lg"
            $isVertical
            prefixIcon={<LeftOutlined />}
          />
          <CustomButton
            label=" lg 커스텀 버튼"
            $variant="outline"
            $size="lg"
            prefixIcon={<LeftOutlined />}
          />
          <CustomButton
            label="lg 커스텀 버튼"
            $variant="outline"
            $size="lg"
            suffixIcon={<RightOutlined />}
          />
          <CustomButton
            label="lg disabled 커스텀 버튼"
            $variant="outline"
            $size="lg"
            disabled
          />
        </div>
        <Board />
        <CustomTabs items={tabItems} />
        <CustomTabs items={tabItems2} $fullWidth />
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
