import axios from 'axios';
import { useEffect, useState } from 'react';

function UserNameFetcher({ userId }) {
  const [userName, setUserName] = useState(null);


  const fetchUserName = async (user_id) => {
    const token =  await fetch('/login', { method: 'GET'})
    const headerx= token.headers.get('Authorization')
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${user_id}`, { headers: { Authorization: headerx.valueOf()}})
    return response.data.name
  }

  useEffect(() => {
    fetchUserName(userId).then((name) => {
        setUserName(name);
      });
  }, [userId]);

  if (userName === null) {
    return <div>Loading...</div>;
  }

  return <span>{userName}</span>;
}

export default UserNameFetcher;
