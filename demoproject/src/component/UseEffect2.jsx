import { useEffect, useState } from 'react';

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
   try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    setUser(data.results[0]);
   } catch (error) {
    console.log(error);
   }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser(); // initial load e call hobe
  }, []);

  if (loading) return <p>Loading user...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={user.picture.large} alt={user.name.first} style={{ borderRadius: '50%' }} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>{user.email}</p>
      <p>Gender: {user.gender}</p>
      
      <button onClick={fetchUser}>Load New User</button>
    </div>
  );
}

export default RandomUser;
