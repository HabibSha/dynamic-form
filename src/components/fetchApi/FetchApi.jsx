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
  const posts = useFetchApi("https://jsonplaceholder.typicode.com/posts");

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
      </article>
    </>
  );
};

export default FetchApi;
