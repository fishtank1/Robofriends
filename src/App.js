import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searhfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searhfield: event.target.value })
    }

    render() {
        const filterRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searhfield.toLowerCase()) ;
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robotsArray={filterRobots}/>
            </div>
        )
    }
}

export default App;