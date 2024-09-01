import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuBar = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #eceeef;
    margin-top: 0;
`;

export const NavItem = styled.li`
    display: list-item;
    text-decoration: none;
`;

export const NavTab = styled(NavLink)`
    display: block;
    padding: 0.5rem 1rem;
`;


