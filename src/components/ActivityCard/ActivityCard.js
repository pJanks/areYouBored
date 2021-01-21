import favoriteInactiveIcon from '../../images/favorite_inactive.png'
import favoriteActiveIcon from '../../images/favorite_active.png'
import { useState, useEffect } from 'react'
import { NewActivityForm } from '../NewActivityForm/NewActivityForm'
import { Loader } from '../Loader/Loader'
import { AboutInfo } from '../AboutInfo/AboutInfo'
import { StyledFavoriteIconWrapper, StyledNoFavoritesMessage, StyledFavoriteActiveIcon, StyledFavoriteInactiveIcon, StyledCardWrapper, StyledCard, StyledActivityHeader, StyledActivityInfo, StyledLink } from './ActivityCardStyledComponents'

export const ActivityCard = ({ currentActivity, setActivity, isAboutInfoActive, setIsAboutInfoActive, isViewFavoritesActive, setIsViewFavoritesActive}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [allFavorites, setAllFavorites] = useState([])

  const updateLocalStorage = () => {
    localStorage.setItem(currentActivity.key, JSON.stringify(currentActivity))
  }

  const checkLocalStorage = () => {
    const activityFromStorage = JSON.parse(localStorage.getItem(currentActivity.key))
    if (activityFromStorage) {
      setIsFavorite(activityFromStorage.isFavorite)
    }
  }
  
  const handleFavoriteButtonClick = () => {
    if (!isFavorite) {
      setIsFavorite(true)
      currentActivity.isFavorite = true
      updateLocalStorage()
    } else {
      setIsFavorite(false)
      deleteFromStorage(currentActivity.key)
    }
  }

  const deleteFromStorage = (key, updatedKeys) => {
    localStorage.removeItem(key)
    setAllFavorites(updatedKeys)
  }
  
  useEffect(() => {
    checkLocalStorage()
  })
  
  if (isAboutInfoActive) {
    return(
      <StyledCardWrapper>
      <AboutInfo setIsAboutInfoActive={setIsAboutInfoActive} />
      <StyledCard>
        <StyledFavoriteIconWrapper>
          {isFavorite ? (
            <StyledFavoriteActiveIcon onClick={handleFavoriteButtonClick} tabIndex='0' alt='Click to unfavorite activity' src={favoriteActiveIcon} />
          ) : (
            <StyledFavoriteInactiveIcon onClick={handleFavoriteButtonClick} tabIndex='0' alt='Click to favorite activity' src={favoriteInactiveIcon} />
          )}
        </StyledFavoriteIconWrapper>
        <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
        <StyledActivityInfo>Activity Type: {currentActivity.type === 'diy' ? `${currentActivity.type.toUpperCase().split('').join('.')}.` : currentActivity.type}</StyledActivityInfo>
        <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
        {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
        <NewActivityForm setActivity={setActivity} currentActivity={currentActivity} setIsFavorite={setIsFavorite} />
      </StyledCard>
    </StyledCardWrapper>
    )
  } else if (isViewFavoritesActive) {
    const localStorageKeys = Object.keys(localStorage)
    if (localStorage.length) {
      return (
        localStorageKeys.map(key => {
          const favoriteItem = JSON.parse(localStorage.getItem(key))
          return (
            <StyledCardWrapper key={key}>
              <StyledCard>
                <StyledFavoriteIconWrapper>
                  <StyledFavoriteActiveIcon onClick={() => deleteFromStorage(favoriteItem.key, localStorageKeys)} tabIndex='0' alt='Click to unfavorite activity' src={favoriteActiveIcon} />
                </StyledFavoriteIconWrapper>
                <StyledActivityHeader>Activity: {favoriteItem.activity}</StyledActivityHeader>
                <StyledActivityInfo>Activity Type: {favoriteItem.type === 'diy' ? `${favoriteItem.type.toUpperCase().split('').join('.')}.` : favoriteItem.type}</StyledActivityInfo>
                <StyledActivityInfo>Participants: {favoriteItem.participants}</StyledActivityInfo>
                {favoriteItem.link ? <StyledActivityInfo>Link: <StyledLink href={favoriteItem.link}>{favoriteItem.link}</StyledLink></StyledActivityInfo> : null}
                <NewActivityForm setActivity={setActivity} currentActivity={currentActivity} setIsFavorite={setIsFavorite} />
              </StyledCard>
            </StyledCardWrapper>
          )
        })
      )
    } else {
      return <StyledNoFavoritesMessage>You Have No Favorites!</StyledNoFavoritesMessage>
    }       
  } else {
    return (currentActivity.activity) ? (
      <StyledCardWrapper>
        <StyledCard>
          <StyledFavoriteIconWrapper>
            {isFavorite ? (
              <StyledFavoriteActiveIcon onClick={handleFavoriteButtonClick} tabIndex='0' alt='Click to unfavorite activity' src={favoriteActiveIcon} />
            ) : (
              <StyledFavoriteInactiveIcon onClick={handleFavoriteButtonClick} tabIndex='0' alt='Click to favorite activity' src={favoriteInactiveIcon} />
            )}
          </StyledFavoriteIconWrapper>
          <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
          <StyledActivityInfo>Activity Type: {currentActivity.type === 'diy' ? `${currentActivity.type.toUpperCase().split('').join('.')}.` : currentActivity.type}</StyledActivityInfo>
          <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
          {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
          <NewActivityForm setActivity={setActivity} currentActivity={currentActivity} setIsFavorite={setIsFavorite} />
        </StyledCard>
      </StyledCardWrapper>
    ) : <Loader />
  }
}