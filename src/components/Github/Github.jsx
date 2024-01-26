import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/manoj1902")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div>
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Follower: {data.followers}
      </h1>
      <h1 className="text-center text-3xl">
        Repostories : {data.public_repos}
      </h1>
      <Link to={data.repos_url}>Click Here to See All Repos</Link>
      <div className="bg-gray-600 flex justify-center p-4">
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const url = "https://api.github.com/users/manoj1902";
  //   const response = await fetch("https://api.github.com/users/manoj1902");
  const response = await fetch(url);
  return response.json();
};
