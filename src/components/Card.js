import React, { Component } from "react";

class Card extends Component {
    render() {
        let { name, email, id, username } = this.props.data;
        return(
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robots" src={`https://robohash.org/${id + 11}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;