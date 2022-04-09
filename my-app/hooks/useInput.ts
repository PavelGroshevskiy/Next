import { useState } from "react";

export default function userInput (initialValue: string) {
	const [value, setValue] = useState(initialValue)

	const onChange = e => {
		setValue(e.target.value)
	}

	return {
		value, onChange
	}
}