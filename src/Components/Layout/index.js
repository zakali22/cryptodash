import React from 'react';
import Nav from "./Nav"


const Layout = (props) => {
	return (
		<div className="page-layout">
			<Nav />
			{props.children}
		</div>
	)
}

export default Layout