import React, { useEffect, useState } from 'react';
import './AdminUserPage.css';

const AdminUserPage = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        const getData = async () => {
            try {
                const data = await fetch('https://portfolio-4y17.onrender.com/form');
                const res = await data.json();
                if (res.status === "Success") {
                    setUserData(res.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`https://portfolio-4y17.onrender.com/form/${userId}`, {
                method: 'DELETE'
            });
            const res = await response.json();
            if (res.status === "Success") {
                // Remove the deleted user from the UI
                const updatedUserData = userData.filter(user => user._id !== userId);
                setUserData(updatedUserData);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    return (
        <>
            <div className='admin__panel'>
                {userData && userData.length > 0 ? userData.map((data) => (
                    <div className='user__card' key={data._id}>
                        <div className='user__details'>
                            <h2><span>username - </span>{data.name}</h2>
                            <p><span>email - </span>{data.email}</p>
                            <p><span>number - </span>{data.number}</p>
                            <p><span>message - </span>{data.message}</p>
                            <div onClick={() => handleDelete(data._id)} className='delete__button'>remove</div>
                        </div>
                    </div>
                )) : (<h1>Data is not Available</h1>)}
            </div>
        </>
    )
}

export default AdminUserPage;
