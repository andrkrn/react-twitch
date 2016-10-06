import React from 'react'
import NavigationLink from './NavigationLink'

const Navigation = () => (
  <ul className='navigation'>
    <NavigationLink
      filter='SHOW_ALL'
      text='All' />
    <NavigationLink
      filter='SHOW_ONLINE'
      text='Online' />
    <NavigationLink
      filter='SHOW_OFFLINE'
      text='Offline' />
  </ul>
)

export default Navigation
