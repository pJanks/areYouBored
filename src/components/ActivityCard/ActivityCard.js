import { useState } from 'react'
import { NewActivityForm } from '../NewActivityForm/NewActivityForm'
import { Loader } from '../Loader/Loader'
import { AboutInfo } from '../AboutInfo/AboutInfo'
import { StyledCardWrapper, StyledCard, StyledActivityHeader, StyledActivityInfo, StyledLink } from './ActivityCardStyledComponents'

export const ActivityCard = ({ currentActivity, setActivity, isAboutInfoActive, setIsAboutInfoActive }) => {

  return currentActivity.activity ? (
    <StyledCardWrapper>
      {isAboutInfoActive ? <AboutInfo setIsAboutInfoActive={setIsAboutInfoActive} /> : null}
      <StyledCard>
        <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
        <StyledActivityInfo>Activity Type: {currentActivity.type === 'diy' ? `${currentActivity.type.toUpperCase().split('').join('.')}.` : currentActivity.type}</StyledActivityInfo>
        <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
        {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
        <NewActivityForm setActivity={setActivity} />
      </StyledCard>
    </StyledCardWrapper>
  ) : <Loader />
}