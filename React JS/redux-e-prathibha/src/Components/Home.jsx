import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { homeAction } from '../Actions'
import img from '../images/prathibha.png'

const Home = (props) => {
  return (
    <div>
        <Link to="/home"><img src={img} alt="" /></Link>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    home:homeAction
  }
}

export default connect(mapStateToProps)(Home)
