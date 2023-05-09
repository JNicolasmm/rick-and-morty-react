import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const Nav = (props) => {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <Link to='/about'>
        <button>About</button>
      </Link>
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Nav