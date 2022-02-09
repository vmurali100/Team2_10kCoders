import {Link} from 'react-router-dom'
let Header = ()=>{
    return(
         <nav class="navbar navbar-expand-sm bg-dark">
  <div class="container-fluid mt-2">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://ipr.ap.nic.in/">Ap</a>
     
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.ap.gov.in/">State</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.apindustries.gov.in/">CM</a>
      </li>
    </ul>
  </div>
</nav>  
    )
}
export default Header;