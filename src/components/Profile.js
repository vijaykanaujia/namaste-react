import { useEffect, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy User",
    location: "Dummy Location",
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    getUserData();

    //this call when we leave page
    return () => {
      console.log("leave profileComponent");
    };
  }, []);

  async function getUserData() {
    const data = await fetch("https://api.github.com/users/vijaykanaujia");
    const json = await data.json();
    setUserInfo(json);
  }
  return (
    <div>
      <h2>{count}</h2>
      <h1>User Info function component</h1>
      <img style={{ width: "200px" }} src={userInfo.avatar_url} />
      <p>{userInfo?.name}</p>
      <p>{userInfo?.location}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
    </div>
  );
};

export default Profile;
