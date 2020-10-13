import React from 'react'
import styled from 'styled-components'

export const SectionTitle = ({ title, message }) => {
  return (
    <TitleWrapper>
      <UpperSubtitle>{message}</UpperSubtitle>
      <Title>{title}</Title>
      <Underline />
    </TitleWrapper>
  )
}

SectionTitle.defaultProps = {
  message: 'our message',
  title: 'our title',
}

const TitleWrapper = styled.div`
  text-align: center;
`

const Underline = styled.div`
  width: 5rem;
  height: 0.2rem;
  background: ${({ theme }) => theme.colors.mainYellow};
  margin: 0.5rem auto;
`

const UpperSubtitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1.25rem;
  letter-spacing: .3rem;
  color: ${({ theme }) => theme.colors.mainYellow};
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 2.25rem;
  letter-spacing: .3rem;
  text-transform: uppercase;
`;