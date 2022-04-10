import { useEffect, useMemo, useState } from "react";
import { IOptions, Post } from "../types/types";

export const useFilter = (arr: Post[], { sort, filter }: IOptions) => {
  const [items, setItems] = useState(arr);
  const [sorted, setSorted] = useState(sort);

  const filtered = useMemo(() => {
    return items.filter((item) =>
      item.body.toLocaleLowerCase().includes(filter.value)
    );
  }, [filter.value]);

  // const handleSort = (filtered:any) => {

  const SortAsc = () => {
    filtered.sort((a: any, b: any) => a.id - b.id);
    setSorted("ASC");
  };

  const SortDesc = () => {
    filtered.sort((b: any, a: any) => a.id - b.id);
    setSorted("DESC");
  };
  // useEffect(() => {
  // 	sorted === 'DESC' ? SortDesc() : SortAsc()
  // },[])

  // }

  return {
    filtered,
    SortAsc,
    SortDesc,
  };
};
