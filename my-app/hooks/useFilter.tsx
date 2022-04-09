
import { useEffect, useMemo, useState } from "react";
import { IOptions, Post } from "../types/types";

export const useFilter = (arr: Post[], {sort, filter}: IOptions) => {
  const [items, setItems] = useState(arr)

	const filtered = useMemo( () => {
    return items.filter( item => item.body.toLocaleLowerCase().includes(filter.value) )
  }, [filter.value] )
		
		const SortAsc = () => {
			filtered.sort((b,a)=>a.id-b.id)
		}

		const SortDesc = () => {
			filtered.sort((a,b)=>a.id-b.id)
		}

			sort === 'DESC' ? SortAsc() : SortDesc()

		const result = (
			<div>
				{filtered.map(({id, title, body}) => (
          
          <div>
              <h2>id: {id} </h2>
              <h2>title: {title}</h2>
              <p>body: {body}</p>
              <hr/>
          </div>
          
        ))}
			</div>
		)

	return {
		result
	}
}

