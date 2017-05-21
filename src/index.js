import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Temperature from './Temperature';

//ReactDOM.render(<App />, document.getElementById('root'));


const user = {
    firstName: 'Talal',
    lastName: 'Tayyab'
};

function formatName(user, displayLastName) {
    if (displayLastName) {
        return <b>{user.firstName + ' ' + user.lastName}</b>
    } else {
        return <b>{user.firstName}</b>
    }
}

const element = <h1>{formatName(user, true)}</h1>


//ReactDOM.render(element, document.getElementById('root'));

function tick() {
    const element2 =
        <div>
            <h1>Time updater</h1>
            <h3>Time:</h3> <i>{new Date().toLocaleTimeString()}</i>
        </div>
    ReactDOM.render(element2, document.getElementById('root2'));
}

//setInterval(tick, 1000);


function Welcome(props) {
    var val = 1;
    return <div>
        <h1>Welcome {props.name}</h1>
        <h2>Welcome {props.name}</h2>
        <i>{val}</i>
    </div>
}

const element3 = <Welcome name="TT" />

//ReactDOM.render(element3, document.getElementById('root3'));

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), counter: 1 };
        this.clicked = this.clicked.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Hello Wordl!</h1> <i>{this.state.counter}</i>
                {this.state.counter < 10 &&
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                }
                <a href="#" onClick={this.clicked}>Link</a>
            </div>
        );
    }

    clicked() {
        this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }

}//class

const element4 =
    <div>
        <Clock />
        <div color='red'>
            <Clock />
        </div>
    </div>

//ReactDOM.render(element4, document.getElementById('root4'));

class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {item: props.item, name: props.item.name};
    }

    render(){
        return (
            <li>
                {this.state.item.name}
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <button onClick={this.clicked} >Update</button>
            </li>
        );
    }

    handleChange(event){
       this.setState({name:event.target.value});
    }

    clicked(){
        this.setState(function(oldValue,props){
            return {item: {name:oldValue.name}};
        });
    }
}

let items = [{id:1, name:'Talal'},{id:2, name:'Leo'}];
const listItems = items.map((x, y) => <ListItem key={x.id} item={x}></ListItem>);
const element5 = <ul>{listItems}</ul>

//ReactDOM.render(element5, document.getElementById('root4'));


ReactDOM.render(<Temperature/>, document.getElementById('root4'));


registerServiceWorker();
