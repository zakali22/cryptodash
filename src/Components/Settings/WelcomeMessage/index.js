import React from "react";
import {Context} from "../../Provider"

const WelcomeMessage = () => {
	return (
		<Context.Consumer>
		{(({firstVisit}) => {
				{ return firstVisit ? 
					<h1 className="sub-heading">Welcome to Cryptodash. Please choose your favourite cryptocurrency</h1> : <h1 className="heading">Settings</h1>
				}
			}
		)}
		</Context.Consumer>
	)
}
export default WelcomeMessage;