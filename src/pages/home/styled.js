import styled from "styled-components";
export const NavBarWrapper = styled.div`
  width:100%;
  height:100%;
  position: relative;
  top:0;
  left:0;
  z-index:10;
.my-drawer {
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

}
.my-drawer .am-drawer-sidebar {
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.my-drawer .am-drawer-sidebar .am-list {
  width: 300px;
  padding: 0;
}
.login .am-list-line div{
  text-align:right;
}
.am-drawer-draghandle{
  background:none;
}
.am-drawer-sidebar {
  z-index: 10000;
}
` 