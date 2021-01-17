import { NewActivityForm } from '../NewActivityForm/NewActivityForm'
import { StyledCardWrapper, StyledCard, StyledActivityHeader, StyledActivityInfo, StyledLink } from './ActivityCardStyledComponents'

export const ActivityCard = ({ currentActivity, setActivity }) => {


  return currentActivity.activity ? (
    <StyledCardWrapper>
      <StyledCard>
        <StyledActivityHeader>Activity: {currentActivity.activity}</StyledActivityHeader>
        <StyledActivityInfo>Activity Type: {currentActivity.type}</StyledActivityInfo>
        <StyledActivityInfo>Participants: {currentActivity.participants}</StyledActivityInfo>
        {currentActivity.link ? <StyledActivityInfo>Link: <StyledLink href={currentActivity.link}>{currentActivity.link}</StyledLink></StyledActivityInfo> : null}
        <NewActivityForm setActivity={setActivity} />
      </StyledCard>
    </StyledCardWrapper>
  ) : <h1>LOADING . . .</h1>
}

// {
//   "activity": "Visit your past teachers",
//   "type": "social",
//   "participants": 1,
//   "price": 0,
//   "link": "",
//   "key": "8238918",
//   "accessibility": 0.7
// }

// dropdown to filter type and button to search
// free activity button
// random activity button
// make loader component