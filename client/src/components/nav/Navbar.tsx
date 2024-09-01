import { NavBar, NavMenu } from "./navbar.styles";

export default function Navbar() {
    return (
        <NavBar>
            <NavMenu aria-current="page" to="/">Home</NavMenu>
            <NavMenu to="/stats">Statistics</NavMenu>
        </NavBar>

    );
}