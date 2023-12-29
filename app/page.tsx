'use client'

import React, { useState } from 'react';
import Albums from './components/Albums/Albums'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'
import Nav from './components/Nav/Nav'

function Home() {
  const [activeSection, setActiveSection] = useState<'Users' | 'Posts' | 'Albums'>('Users');

  const handleSectionChange = (section: 'Users' | 'Posts' | 'Albums') => {
    setActiveSection(section);
  };

  return (
    <>
      <Nav onSectionChange={handleSectionChange} />

      {activeSection === 'Users' && <Users />}
      {activeSection === 'Posts' && <Posts />}
      {activeSection === 'Albums' && <Albums />}
    </>
  );
}

export default Home;

