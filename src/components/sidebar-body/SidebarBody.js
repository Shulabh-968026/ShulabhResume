import React from 'react'
import Education from './education/Education'
import Internship from './internship/Internship'
import Language from './language/Language'
import Profile from './Profile/Profile'
import Skills from './skills/Skills'
import Summary from './summary/Summary'

function SidebarBody() {
  return (
    <>
      <Profile/>
      <Summary/>
      <Education/>
      <Internship/>
      <Skills/>
      <Language/>
    </>
  )
}

export default SidebarBody