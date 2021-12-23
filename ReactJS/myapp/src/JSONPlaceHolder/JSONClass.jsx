import axios from 'axios'
import React, { Component } from 'react' 
  export default class Posts extends Component {
      constructor(props){
      super(props) 
      this.state ={
          posts : [] ,
          comments  : [],
          albums : [] ,
          photos : [],
          todos : [],
          users : []

      }
    }
    componentDidMount(){
       let URL = "https://jsonplaceholder.typicode.com/posts"
    axios.get(URL).then(({data})=>{
       let  newemployee = {...this.state}
       newemployee['posts'] = data ;
    this.setState(newemployee);
    })
    }
    render(){
        return <div>
            <h1>JSON - POSTS </h1>
            <ol>
                {this.state.posts.map((emp)=>{
                    return <li>{emp.title}</li>
                })}
            </ol>
        </div>
    }
  }
//   filltext person +++++++++++++++++++++++++++++++++++++++++++++
export  class Comments extends Component {
    constructor(props){
    super(props) 
    this.state ={
        posts : [] ,
        comments  : [],
        albums : [] ,
        photos : [],
        todos : [],
        users : []
    }
  }
  componentDidMount(){
     let URL = "https://jsonplaceholder.typicode.com/comments"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['comments'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>JSON - COMMENTS</h1>
          <ol>
              {this.state.comments.map((emp)=>{
                  return <li>{emp.email}</li>
              })}
          </ol>
      </div>
  }
}
// filltext name ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
export  class Albums extends Component {
    constructor(props){
    super(props) 
    this.state ={
        posts : [] ,
        comments  : [],
        albums : [] ,
        photos : [],
        todos : [],
        users : []
  }
}
  componentDidMount(){
     let URL = "https://jsonplaceholder.typicode.com/albums"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['albums'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>JSON - ALBUMS </h1>
          <ol>
              {this.state.albums.map((emp)=>{
                  return <li>{emp.title}</li>
              })}
          </ol>
      </div>
  }
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  class Photos extends Component {
    constructor(props){
    super(props) 
    this.state ={
        posts : [] ,
        comments  : [],
        albums : [] ,
        photos : [],
        todos : [],
        users : []
  }
}
  componentDidMount(){
     let URL = "https://jsonplaceholder.typicode.com/photos"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['photos'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>JSON - PHOTOS </h1>
          <ol>
              {this.state.photos.map((emp)=>{
                  return <li><img style={{"width":"50px" , "height":"50px"}} src={emp.url} alt="" /></li>
              })}
          </ol>
      </div>
  }
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  class Todos extends Component {
    constructor(props){
    super(props) 
    this.state ={
        posts : [] ,
        comments  : [],
        albums : [] ,
        photos : [],
        todos : [],
        users : []
  }
}
  componentDidMount(){
     let URL = "https://jsonplaceholder.typicode.com/todos"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['todos'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>JSON - TODOS </h1>
          <ol>
              {this.state.todos.map((emp)=>{
                  return <li>{emp.title}</li>
              })}
          </ol>
      </div>
  }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  class Usersjson extends Component {
    constructor(props){
    super(props) 
    this.state ={
        posts : [] ,
        comments  : [],
        albums : [] ,
        photos : [],
        todos : [],
        users : []
  }
}
  componentDidMount(){
     let URL = "https://jsonplaceholder.typicode.com/users"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['users'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>JSON - USERS </h1>
          <ol>
              {this.state.users.map((emp)=>{
                  return <li>{emp.email}</li>
              })}
          </ol>
      </div>
  }
}