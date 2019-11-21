import React from "react"
import styled, {css} from 'styled-components'
import {Context} from '../Provider'

const NavButton = styled.p`
	${props => props.active && css`
		color: white;
		text-shadow: 0px 0px 25px #03ff03;
	`}
`;



const NavElement = (props) => {
	return (
		<Context.Consumer>
			{(value => {
					return (
						<NavButton active={value.page === props.name} onClick={() => value.setPage(props.name)}>
							<a href="#">{props.name}</a>
						</NavButton>
					)
				}
			)}
		</Context.Consumer>
	)
}


const Nav = () => {
	return (
		<nav className="page-layout__nav">
			<h1 className="page-layout__nav--logo"><a href="#">CryptoDash</a></h1>
			<NavElement name="Settings"/>
			<NavElement name="Dashboard"/>
			<Context.Consumer>
			{(({changeTheme}) => {
					return (
						<select defaultValue="dark" onChange={e => changeTheme(e.target.value)}>
							<option value="dark">Dark</option>
							<option value="light">Light</option>
						</select>
					)
				}
			)}
			</Context.Consumer>
		</nav>
	)
}


export default Nav;