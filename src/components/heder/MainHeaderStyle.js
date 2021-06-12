import styled from 'styled-components'
import { Link as LRouter } from 'react-router-dom'
import {Link as LScroll} from 'react-scroll'


export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#112d4e' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: right;
align-items: right;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width:960px){
     transition: 0.8s all ease;
}`;
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px; `;

export const NavLogo = styled(LRouter)`
color: #fff;
justify-self: flex-end;
cursor: pointer;
font-size:1.5rem;
display: flex;
align-items: center;
margin-right: 24px;
font-weight: bold;
text-decoration: none;`;

export const Image = styled.img`
width: 46%;`

export const ResponsiveIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%); 
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
}`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:760px){
    display:none;
}`;

export const NavItem = styled.li`
height:80px;`;

export const NavLinks = styled(LScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    border-bottom: 3px solid #01bf71;
}`;


export const NavButton = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}`
export const NavButtonLink = styled(LRouter)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.1s ease-in-out;
    background: #fff;
    color:#010606;
}`