import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        //Like overwriting a local method with the correct context.
        this.onInputChange = this.onInputChange.bind(this); //Need to bind this, because by default this has the wrong context in a method.
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        //Should prevent submitting the form because we have a single page application. Shouldn't redirect.
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term : '' });
    }

    render() {
        /*Input is a controlled field. Value of our element is set by the state, not the other way around.*/
        return(
            <form className="input-group" onSubmit={ this.onFormSubmit }>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather: fetchWeatherData }, dispatch);
}
//Pass null because mapDispatchToProps has to always be the second argument. Null means that the current container does
//Not care about the Redux state.
export default connect(null, mapDispatchToProps)(SearchBar);