
import { useMemo, useState } from "react"
import { useFilter } from "../hooks/useFilter"

const Posts = ({posts}) => {

  const {result} = useFilter(posts, {filter: {value:'h'}, sort:'ASC'})

	return (

		<div>
			<h1> List of Posts </h1>
      <div>
        {result}
      </div>
		</div>

	)
}

export default Posts

