import './App.css';
import React, { useState, useEffect } from 'react';

// https://api.github.com/users/gagneet

function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.company}</h2>
      <h3>{data.blog}</h3>
      <h3>{data.id}</h3>
      <h3>{data.created_at}</h3>
      <p>
        {data.location} <br />
        {data.bio}
      </p>
      <img alt={data.login} src={data.avatar_url} height="200" />
    </div>
  );
}

export default App;
