import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const NavMenu = styled(NavLink)`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
`;
