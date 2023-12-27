'use client'

import Albums from './components/Albums/Albums'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'

const Home = () => {
  return (
    <>
      <Users />
      <Posts />
      <Albums />
    </>
  );
}

export default Home;
