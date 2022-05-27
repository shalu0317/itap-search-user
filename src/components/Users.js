import UserItem from "./UserItem";

const Users = ({ users, toggleTask }) => {
  return (
    <>
    {users.map((user) => {
       return <UserItem key={user.id} user={user} toggleTask={toggleTask}/>
    })}
    </>
  )
}

export default Users