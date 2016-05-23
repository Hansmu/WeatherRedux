import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        //Like overwriting a local method with the correct context.
        this.onInputChange = this.onInputChange.bind(this); //Need to bind this, because by default this has the wrong context in a method.
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        /*Input is a controlled field. Value of our element is set by the state, not the other way around.*/
        return(
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={ this.state.term }
                    onChange = { this.onInputChange }/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}