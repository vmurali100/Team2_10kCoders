import React, {  PureComponent } from "react";

export const HOComp = (Sample) => {
  class component1 extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        name: "akhilvarma",
      };
    }
    handlecount = () => {
      this.setState({ count: this.state.count + 1 });
      let x = Math.ceil(Math.random() * 10);
      if (x < 5) {
        document.querySelector("div").style.backgroundColor = "red";
        document.querySelector("img").setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKNXNecWBsGKFRCEG0hZY3kL7XUpHPpb6yWEkNRDbC8k2VyeOpVFlFJLgYSlPZk4xELc&usqp=CAU")
      } else {
        document.querySelector("div").style.backgroundColor = "green";
        document.querySelector("img").setAttribute("src" , "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/3_47.jpg?itok=BlfPPMmz")
      }
    };
      
    render() {
      return (
        <Sample
          handle={this.handlecount}
          colour={this.state.count}
        //   my={this.my}
        />
      );
    }
  }
  return component1;
};
