import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import userInput from "../hooks/useInput";
import { IOptions } from "../types/types";

const Posts = ({ posts }: any) => {
  const { value, onChange } = userInput("");
  const [sort, setSort] = useState("ASC");
  const { filtered } = useFilter(posts, {
    filter: { value: value },
    sort: sort as IOptions["sort"],
  });

  return (
    <div>
      <h1> List of Posts </h1>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => setSort("ASC")} style={{ marginLeft: "20px" }}>
        {" "}
        Sort asc{" "}
      </button>
      <button onClick={() => setSort("DESC")} style={{ marginLeft: "20px" }}>
        {" "}
        Sort desc{" "}
      </button>
      <div>
        {Array.from(filtered, (filtered) => (
          <div key={filtered.id}>
            <h2>id: {filtered.id} </h2>
            <h2>title: {filtered.title}</h2>
            <p>body: {filtered.body}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
