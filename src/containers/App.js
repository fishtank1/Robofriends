import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searhfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searhfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(resp => resp.json()).
        then(data => {
            this.setState( { robots: data } )
        });
    }

    render() {
        const { robots, searhfield } = this.state;
        const filterRobots = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searhfield.toLowerCase()) ;
        })
        return (!robots.length) ? 
        <h1>Loading</h1> 
        :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robotsArray={filterRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;