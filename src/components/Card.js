import React from 'react'
import 'tachyons'


const Card = ({id, name, email}) =>
{
	return (
		<div className = 'bg-light-green tc dib br3 pa3 ma2 grow'>
			<img alt = {`${name}`} source = {`https://robohash.org/${name}?200x200`}/>
			<h2> {name}	</h2>
			<p> {email} </p>


		</div>
	);
}

export default Card;