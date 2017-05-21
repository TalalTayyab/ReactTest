import React, { Component } from 'react';

class Temperature extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: null
        };

        this.update = this.update.bind(this);
        this.clicked = this.clicked.bind(this);

        this.state.tempType = "C";
    }

    render() {
        return (
            <div>
                <h4>Temperature Convertor</h4>

                <fieldset>
                    <legend>Temperature</legend>
                    <input type="radio" checked={this.isSelected('C')} value="C" onClick={this.clicked} />Celsuis
                    <input type="radio" checked={this.isSelected('F')} value="F" onClick={this.clicked} />Farenheit
                    <br />
                    <label>Enter Temperature in {this.state.tempType === "C" ? "Celsius" : "Farenhiet"}</label>
                    <input type='text' name='temp' value={this.state.temp} onChange={this.update} />
                </fieldset>

                <TempConvertor temp={this.state.temp} tempType={this.state.tempType} />

            </div >
        );
    }

    isSelected(value) {
        return this.state.tempType === value;
    }

    clicked(e) {
        this.setState({ tempType: e.target.value });
    }

    update(e) {
        this.setState({ temp: e.target.value });
    }
}

class TempConvertor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.temp){
            return null;
        }

        var celsius = "";
        var farenheit = "";
        if (this.props.tempType === "C") {
            celsius = this.props.temp;
            farenheit = this.toFahrenheit(celsius);
        } else {
            farenheit = this.props.temp;
            celsius = this.toCelsius(farenheit);
        }

        return (
            <div>
                <b>Farenheit: </b> {farenheit}
                <br />
                <b>Celsius:</b> {celsius}
            </div>
        );
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

}

export default Temperature;