// create your App component here
import React, {Component} from "react"

class App extends Component {
    constructor(){
        super();
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(data => { 
            this.setState({
                peopleInSpace: data.people
            })
        })}


    render(){
        return (
            <div>
                <h1> People in Space </h1>
                {this.state.peopleInSpace.map((p,id) => <li key={id}> p.name </li>)}
            </div>
        )
    }

}

export default App 