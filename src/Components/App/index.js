import React, {Component} from "react"
import {Provider, Context} from "../Provider"

import Layout from "../Layout"
import Settings from "../Settings"
import Dashboard from "../Dashboard"
import Loader from "../Layout/Loader"

class App extends Component {
	pageToRender = (page) => {
		console.log(page)
		switch(page){
			case 'Settings':
				return <Settings page={page}/>;
			case 'Dashboard':
				return <Dashboard page={page}/>;
			default: 
				break;
		}
	}

	render(){
		return (
			<Provider>
				<Layout>
					<Context.Consumer>
						{((value) => {
							return this.pageToRender(value.page)
							}
						)}
					</Context.Consumer>
				</Layout>
			</Provider>
		)
	}
}

export default App