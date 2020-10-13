import styled from 'styled-components'


const BannerButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: transparent;
  padding: .75rem 1.75rem;
  text-transform: uppercase;
  font-size: .8rem;
  border-radius: 25px;
  letter-spacing: 0.5rem;
  font-weight: 700;
  border: solid 1px ${({ theme }) => theme.colors.mainWhite};
  margin-top: 1rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  margin: ${props => props.margin};


  &:hover {
    background: ${({ theme }) => theme.colors.mainYellow};
    color: ${({ theme }) => theme.colors.mainBlack};

    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  margin: ${props => props.margin};
  color: ${({ theme }) => theme.colors.mainYellow};
  border: solid 2px ${({ theme }) => theme.colors.mainYellow};
  
  &:hover {
    background:  ${({ theme }) => theme.colors.mainYellow};
    color:  ${({ theme }) => theme.colors.mainWhite};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
