import React from "react"
import 'tachyons'
import Card from './Card'


const RobotList = ({robots}) => {

	const AllCards = robots.map((user, index) => {
		return <Card key = {index} id = {user.id} name = {user.name} email = {user.email}/>
	}
	
	)
	return (
		<div>
			{AllCards}

		</div>
	);
}

export default RobotList;
