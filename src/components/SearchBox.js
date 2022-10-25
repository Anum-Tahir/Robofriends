import React, {component} from "react"
import 'tachyons'

const SearchBox = ({searchChange}) => {
	return (
		<input 
		className = 'bg-lightest-blue tc dib br3 pa3 ma2 grow' 
		type = 'search' 
		placeholder = 'Enter Robot Name' 
		onChange = {searchChange}/>
		);
}

export default SearchBox;