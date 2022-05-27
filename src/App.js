import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState([])
  const [filteredUser, setfilteredUser] = useState([]);

  //get User data
  useEffect(() => {
    const getusers = async () => {
      const res = await fetchUser();
      setUsers(res);
      setfilteredUser(res);
    }
    getusers();
  }, [])

  const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }

  //search filter
  const handleFilter = (event) => {
    const searchedString = event.target.value;
    setfilteredUser(users.filter(ele => {
      return ele.username.trim().toLowerCase().includes(searchedString.toLowerCase().trim()) || ele.name.trim().toLowerCase().includes(searchedString.toLowerCase().trim()) || ele.email.trim().toLowerCase().includes(searchedString.toLowerCase().trim());;
    }))

    console.log(searchedString, filteredUser.length, users.length);
  }

  return (
    <div className="container">
      <Header/>
      <SearchBar onHandleFilter={handleFilter} />
      {filteredUser.length > 0 ? <Users users={filteredUser} /> : 'No users to display'}
      <Footer />
    </div>
  );
}


export default App;
