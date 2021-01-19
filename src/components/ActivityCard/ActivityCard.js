import favoriteInactiveIcon from '../../images/favorite_inactive.png'
import favoriteActiveIcon from '../../images/favorite_active.png'
import { useState } from 'react'
import { NewActivityForm } from '../NewActivityForm/NewActivityForm'
import { Loader } from '../Loader/Loader'
import { AboutInfo } from '../AboutInfo/AboutInfo'
import { StyledFavoriteIconWrapper, StyledFavoriteActiveIcon, StyledFavoriteInactiveIcon, StyledCardWrapper, StyledCard, StyledActivityHeader, StyledActivityInfo, StyledLink } from './ActivityCardStyledComponents'

export const ActivityCard = ({ currentActivity, setActivity, isAboutInfoActive, setIsAboutInfoActive }) => {
  const handleFavoriteButtonClicks = () => {
    
  }

  if (isAboutInfoActive) {
    return(
      <StyledCardWrapper>
      <AboutInfo setIsAboutInfoActive={setIsAboutInfoActive} />
      <StyledCard>
        <StyledFavoriteIconWrapper>
          <StyledFavoriteInactiveIcon tabIndex='0' alt='Click to favorite activity' src={favoriteInactiveIcon} />
          <StyledFavoriteActiveIcon tabIndex='0' alt='Click to unfavorite activity' src={favoriteActiveIcon} />
        </StyledFavoriteIconWrapper>
        <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
        <StyledActivityInfo>Activity Type: {currentActivity.type === 'diy' ? `${currentActivity.type.toUpperCase().split('').join('.')}.` : currentActivity.type}</StyledActivityInfo>
        <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
        {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
        <NewActivityForm setActivity={setActivity} />
      </StyledCard>
    </StyledCardWrapper>
    )
  } else {
    return (currentActivity.activity) ? (
      <StyledCardWrapper>
        <StyledCard>
          <StyledFavoriteIconWrapper>
            <StyledFavoriteInactiveIcon tabIndex='0' alt='Click to favorite activity' src={favoriteInactiveIcon} />
            <StyledFavoriteActiveIcon tabIndex='0' alt='Click to unfavorite activity' src={favoriteActiveIcon} />
          </StyledFavoriteIconWrapper>
          <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
          <StyledActivityInfo>Activity Type: {currentActivity.type === 'diy' ? `${currentActivity.type.toUpperCase().split('').join('.')}.` : currentActivity.type}</StyledActivityInfo>
          <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
          {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
          <NewActivityForm setActivity={setActivity} />
        </StyledCard>
      </StyledCardWrapper>
    ) : <Loader />
  }
}