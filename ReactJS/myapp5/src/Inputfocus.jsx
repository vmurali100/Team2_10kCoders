import React ,{ Component } from "react"

export default class  Inputfocus extends Component  {
  constructor(props){
      super(props);
      this.Inputref = React.createRef()
  }
  render(){
      return <div>
          hey from app
          <input type="text" ref = 
          {this.Inputref} />
      </div>
  }
  componentDidMount(){
      this.Inputref.current.focus()
  }
}