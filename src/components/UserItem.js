import { useState } from 'react';
import '../App.css';

const UserItem = ({ user, toggleuser }) => {
    const [showUserDetails, setShowUserDetails] = useState(false);
    return (
        <div onMouseEnter ={() => setShowUserDetails(true)} onMouseLeave ={() => setShowUserDetails(false)}>
        <div className={`input ${user.username ? 'reminder' : ''}`} key={user.id} onDoubleClick={() => toggleuser(user.id)}>
            <div style={{ margin: '10px 5px' }}>
                <span><b>{user.name}</b> @{user.username}</span>
            </div>
           
        </div>
         {showUserDetails ? <div className='detailBox'>
         <div style={{ margin: '10px 5px' }}>
         
                <span ><b>Email: <a href = {`mailto: ${user.email}`}>{user.email}</a></b></span><br/>
                <span><b>Website: <a href = {`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></b></span><br/>
                <span><b>Phone: <a href = {`tel: ${user.phone}`}>{user.phone}</a></b></span>
            </div>
         </div> : ''}
         </div>
    )
}

export default UserItem