import React from 'react';

class PersonCard extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.nombre}</h1>
                <p>Age: {this.props.edad}</p>
                <p>Hair color: {this.props.cabello}</p>
            </div>
        );
    }
}

export default PersonCard;
