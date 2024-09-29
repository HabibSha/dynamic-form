// import { useState, useEffect } from "react";

import useFetchApi from "./useFetchApi";

const FetchApi = () => {
  // const [users, setUsers] = useState([]);
  // const [userLoading, setUserLoading] = useState(false);
  // const [userError, setUserError] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [postLoading, setPostLoading] = useState(false);
  // const [postError, setPostError] = useState("");

  // useEffect(() => {
  //   fetchUserData();
  //   fetchPostData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     setUserLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //     setUserLoading(false);
  //   } catch (error) {
  //     setUserLoading(false);
  //     setUserError(error.message);
  //   }
  // };

  // const fetchPostData = async () => {
  //   try {
  //     setPostLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setPosts(data);
  //     setPostLoading(false);
  //   } catch (error) {
  //     setPostLoading(false);
  //     setPostError(error.message);
  //   }
  // };

  const users = useFetchApi("https://jsonplaceholder.typicode.com/users");

  // TODO: If we don't need any unnecessary data from api, then we will create a call back function and we will pass as a argument that what kind of data we need from the api.
  const posts = useFetchApi(
    "https://jsonplaceholder.typicode.com/posts",
    (data) =>
      data.map((item) => ({ id: item.id, title: item.title })).slice(0, 10)
  );

  const comments = useFetchApi(
    "https://jsonplaceholder.typicode.com/comments",
    (data) =>
      data.map((item) => ({ id: item.id, name: item.name })).slice(0, 10)
  );

  return (
    <>
      <article
        style={{
          display: "flex",

          gap: "25rem",
        }}
      >
        <div>
          <h1>Users</h1>
          <hr />
          {users.loading && <p>Loading...</p>}
          {users.error && <p>{users.error}</p>}
          {users.data &&
            users.data.length > 0 &&
            users.data?.map((user) => {
              return (
                <div key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              );
            })}
        </div>
        <div>
          <h1>Posts</h1>
          <hr />
          {posts.loading && <p>Loading...</p>}
          {posts.error && <p>{posts.error}</p>}
          {posts.data &&
            posts.data.length > 0 &&
            posts.data?.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  {/* <p>{post.body}</p> */}
                </div>
              );
            })}
        </div>
        <div>
          <h1>Comments</h1>
          <hr />
          {comments.loading && <p>Loading...</p>}
          {comments.error && <p>{comments.error}</p>}
          {comments.data &&
            comments.data.length > 0 &&
            comments.data?.map((comment) => {
              return (
                <div key={comment.id}>
                  <h3>{comment.name}</h3>
                  {/* <p>{post.body}</p> */}
                </div>
              );
            })}
        </div>
      </article>
    </>
  );
};

export default FetchApi;
