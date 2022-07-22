import React from "react";


class Green extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.name.map((user, key) => <li key={key}>{user}</li>)}

                </ul>
            </div>
        );
    }
}



export default Green;
