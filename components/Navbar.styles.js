import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    float: right;
    /* position: sticky; */
    top: 0;
    right: 5em;
    position: absolute;
    @media only screen and (max-width: 600px) {
    font-size: 2em;
    left: 10em;
  }

`;

const NavLink = styled.div`
    font-family: Helvetica, Sans-Serif;
    padding: 1.5em;
    font-weight: bold;
    font-size: .9em;
`

export {NavContainer, NavLink}