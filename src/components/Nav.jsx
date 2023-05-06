import SearchBar from "./SearchBar"

const Nav = (props) => {
  return (
    <SearchBar onSearch = {props.onSearch}/>
  )
}

export default Nav