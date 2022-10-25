import React, {Component} from "react"
import 'tachyons'
import RobotList from '../components/RobotList'
import SearchBox from '../components//SearchBox'
import Scroll from '../components//Scroll.js'
import './App.css' 

class App extends Component{
	constructor(){

		super()
		this.state = {
			robots : [] ,
			searchfield : ''
		};
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({robots : users}));
	}

	filteredRobots = (event) => { 
			this.setState({ searchfield : event.target.value})
	}

	render () {
		const {robots, searchfield} = this.state;
		const FilteredBots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (!robots.length)
		{
			return <h1> LOADING </h1>
		}
		else {

			return (
				<div className = 'tc'>
					<h1 className = 't1'> Robofriends </h1>
					<SearchBox searchChange = {this.filteredRobots} />
					<Scroll>
						<RobotList robots = {FilteredBots} />
					</Scroll>
				</div>

			);
		}
	}
		
}
export default App;