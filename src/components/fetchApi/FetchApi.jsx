import { useState, useEffect } from "react";

const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");

  useEffect(() => {
    fetchUserData();
    fetchPostData();
  }, []);

  const fetchUserData = async () => {
    try {
      setUserLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setUserLoading(false);
    } catch (error) {
      setUserLoading(false);
      setUserError(error.message);
    }
  };

  const fetchPostData = async () => {
    try {
      setPostLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setPostLoading(false);
    } catch (error) {
      setPostLoading(false);
      setPostError(error.message);
    }
  };

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
          {userLoading && <p>Loading...</p>}
          {userError && <p>{userError}</p>}
          {users &&
            users.length > 0 &&
            users.map((user) => {
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
          {postLoading && <p>Loading...</p>}
          {postError && <p>{postError}</p>}
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
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
