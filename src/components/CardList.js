import React, { Component } from "react";
import Card from "./Card";


class CardList extends Component {
    render() {
        let robots = this.props.robotsArray;
        return(
            <div>
                {
                    robots.map(data => {
                        return (
                            <Card 
                                key={data.id} 
                                data={data} 
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;