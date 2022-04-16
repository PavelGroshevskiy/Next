import { useMemo } from "react";
import { IOptions, Post } from "../types/types";

export const useFilter = (posts: Post[], { sort, filter }: IOptions) => {
  const filtered = useMemo(() => {
    return posts
      .filter((posts) => posts.body.toLocaleLowerCase().includes(filter.value))
      .sort(({ id: a }, { id: b }) => (sort === "ASC" ? a - b : b - a));
  }, [filter.value, sort]);
  return {
    filtered,
  };
};
