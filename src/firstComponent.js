import React from "react";
import App from "./App";
import SecondComponent from "./secondComponent";

class FirstComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      myName: "josey",
      unde: [],
    };
  }

  handleIncrement = () => {
    console.log("I am clicked");
    this.setState({ num: this.state.num + 1 });
  };

  handleName = () => {
    this.setState({ myName: "Josey MJ" });
    console.log(this.state.unde);
    this.setState({ unde: ["raj", "priya"] });
  };

  //   if(this.state.unde.length > 0){

  //   }else {

  //   }

  render() {
    return (
      <>
        <p>My Class Component</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <p style={{ margin: "10px" }}>{this.state.num}</p>
        <button onClick={this.handleName}>Change Name</button>
        <p>{this.state.myName}</p>
        {/* {this.state.unde.length && <App />} */}
        {this.state.unde.length || "true"}
        {/* // LSV = true -> LSV
        // LSV = false -> true */}
        {/* {this.state.unde.length && "true"} */}
        {/* // LSV = false -> no render
        // LSV = true -> render RSV */}
        <SecondComponent myNam={this.state.myName} numb={this.state.num} />
        {this.state.unde.length > 0
          ? this.state.unde.map((nam, i) => (
              <div key={nam}>
                <span>{nam}</span>
                <span>{i}</span>
              </div>
            ))
          : null}
      </>
    );
  }
}

export default FirstComponent;
