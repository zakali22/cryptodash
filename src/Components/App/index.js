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
				return <Settings />;
			case 'Dashboard':
				return <Dashboard />;
			default: 
				break;
		}
	}

	render(){
		return (
			<Provider>
				<Layout>
					<Loader>
						<Context.Consumer>
							{((value) => {
								return this.pageToRender(value.page)
								}
							)}
						</Context.Consumer>
					</Loader>
				</Layout>
			</Provider>
		)
	}
}

export default App