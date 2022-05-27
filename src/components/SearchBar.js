import '../App.css';

function SearchBar({onHandleFilter}) {
  return ( 
    <div>
      <input className="searchBar" placeholder="Search by username or email..." onChange={onHandleFilter}></input>
    </div>
  )
}

export default SearchBar