import React from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
const Header = () => {
  return (
    <nav className="Header">
      <img src="/logo.png" alt="logo" />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <GoSearch />
    </nav>
  )
}

export default Header