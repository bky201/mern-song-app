import { MenuBar, NavItem, NavTab } from "./menubar.styles";

export default function Menubar() {
  return (
    <>
      <MenuBar>
        <NavItem>
          <NavTab to="/">
            Dashboard
          </NavTab>
        </NavItem>
        <NavItem>
          <NavTab to="/song/addmusic">
            Upload 
          </NavTab>
        </NavItem>
      </MenuBar>
    </>
  );
}