import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  `

function Sidebar() {
  return (
    <StyledSideBar>
      <Logo/>
      <MainNav/>

    </StyledSideBar>
  )
}

export default Sidebar
