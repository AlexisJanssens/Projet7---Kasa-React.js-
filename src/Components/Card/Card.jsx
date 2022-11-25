import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: red;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardCover = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
`

function Cards({ title, cover }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardCover src={cover} alt="image de l'appartement"></CardCover>
    </CardWrapper>
  )
}

export default Cards
