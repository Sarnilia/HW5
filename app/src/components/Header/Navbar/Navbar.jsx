import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid justify-content-center" style={{ width: '300px' }}>
        <Link className="navbar-brand" to="/">Photos</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="form">Add Photo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
