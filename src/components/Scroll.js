import React, { Children, Component } from "react";

class Scroll extends Component {
    render() {
        return (
            <div style={{ overflowY: 'scroll', border: '5px solid black', height: '750px' }}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;