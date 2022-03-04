import React from 'react'

export const Footer = () => {
  return (
    <footer className="fixed-bottom " style={{backgroundColor:"black", color:"white", height:"auto"}}>
        <div className='container d-flex justify-content-between' style={{ paddingBottom: 10+"px", paddingTop:20+"px"}} >
        <p>About Privacy Policy Terms & conditions Disclamier Feedback ContactUs Refund</p>
        <p>&copy; Copyright 2022 e-parthibha</p>
        <p>Powered by Error Technology</p>
        </div>
    </footer>
  )
}
