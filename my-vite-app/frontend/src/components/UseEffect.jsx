import React, { useEffect } from "react";
import "../components/css/UseEffect.css";
import { useState } from "react";
import axios from "axios";

var Location = () => {
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log("inside ue",res.data);
        setPost(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts/")
//     .then((res) => {
//       console.log(res.data);
//       setPost(res.data);
//     })
//     .catch((err) => console.log(err));
  return (
    <div>
      <h1 style={{ color: "yellow" }}>
        Post fetching data using jsonplceholder api
      </h1>
      <ol>
        {post.map((data) => (
          <li key={data.id}>{data.body}</li>
        ))}
      </ol>
    </div>
  );
};
export default Location;
