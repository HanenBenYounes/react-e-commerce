import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;


`
const Wrapper = styled.div`
padding: 10px 20 px;
display:flex;
justify-content:space-between;
`
const Left= styled.div`
flex:1`;
const Center= styled.div`
flex:1`;
const Right= styled.div`
flex:1`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, aliquid.
      </Left>
      <Center>center</Center>
      <Right>right</Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
