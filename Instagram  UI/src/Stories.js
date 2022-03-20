import React from 'react';
import Story from './story';


function Stories() {
  return (
    {
      suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
      ))
    }
  )
}