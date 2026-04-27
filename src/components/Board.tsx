import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
}

const Board = () => {
  //1. 초기 게시판 데이터(상자에 담기)
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "첫번째 글입니다." },
    { id: 2, title: "두번째 글입니다." },
    { id: 3, title: "세번째 글입니다." },
  ]);

  //2. 삭제함수
  const deletePost = (targetId: number) => {
    const updatePost = posts.filter((posts) => posts.id !== targetId);
    setPosts(updatePost);
  };
  return (
    <div>
      <h2>게시판 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
