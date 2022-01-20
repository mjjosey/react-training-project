import React from "react";

export default class FirstComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Home",
            count: 0,
            items: ["item1", "item2", "item3", "item4"]
        }
        // this.showRole =  this.showRole.bind(this);
    }

    showRole = () => {
        // this.state.name = "Trainer";
        this.setState({name : "Trainer"});
    }

    handleIncrement = () => {
        // this.state.name = "Trainer";
        this.setState({count : this.state.count + 1 });
    }

    handleDecrement = () => {
        // this.state.name = "Trainer";
        this.setState({count : this.state.count - 1 });
    }

    handleCount = () => {
        let countClass = "m-2 text-";
        countClass += this.state.count === 0 ? "danger" : this.state.count === 1 ? "warning" : "primary";
        return countClass;
    }

    handleTitle = (title) => {
       this.setState({ name : title})
    }

    render(){
        // const { name, item1, item2 } = this.props;
        return(
            <div>
                {/* <p className={this.handleCount()}>{name}</p> 
                <p>{item1}</p>
                <p>{item2}</p> */}
                <p>{this.state.count}</p>
                {/* <button className="btn btn-primary" onClick={this.showRole}>Change</button> */}
               <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-secondary" onClick={this.handleDecrement}>Decrement</button>
                {/* <button onClick={() => this.handleTitle("Home")}>Home</button>
                <button onClick={() => this.handleTitle("About")}>About</button>
                <button onClick={() => this.handleTitle("Contact")}>Contact</button>
                <ul className="list-group">
                {
                    this.state.items.map((itm, i) => (
                        <li key={i} className="list-group-item">{itm}</li>

                    ))
                }
                </ul> */}
            </div>
        )
    }
}

