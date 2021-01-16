import styled from 'styled-components'

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledCard = styled.section`
  align-items: left;
  background-color: #FFF;
  border-radius: 20px;
  box-shadow: 0 4px 13px 0 #FFF;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  margin: 10%;
  padding: 3%;
  width: 85%;
`

const StyledActivityHeader = styled.h4`
  background: none;
  font-size: 130%;
`

const StyledActivityInfo = styled.h3`
  background: none;
  font-weight: 400;
  text-transform: capitalize;
`

const StyledLink = styled.a`
  background: none;
  color: blue;
`

export const ActivityCard = ({ props }) => {


  return props.activity ? (
    <StyledCardWrapper>
      <StyledCard>
        <StyledActivityHeader>Activity: {props.activity}</StyledActivityHeader>
        <StyledActivityInfo>Activity Type: {props.type}</StyledActivityInfo>
        <StyledActivityInfo>Participants: {props.participants}</StyledActivityInfo>
        {props.link ? <StyledActivityInfo>Link: <StyledLink href={props.link}>{props.link}</StyledLink></StyledActivityInfo> : null}
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