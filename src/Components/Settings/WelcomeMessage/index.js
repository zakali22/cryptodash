import React from "react";
import {Context} from "../../Provider"

const WelcomeMessage = () => {
	return (
		<Context.Consumer>
		{(({firstVisit, favouriteCoins}) => {
				{ return firstVisit || !favouriteCoins.length ? 
					<h1 className="sub-heading">Welcome to Cryptodash. Please choose your favourite cryptocurrency</h1> : null
				}
			}
		)}
		</Context.Consumer>
	)
}
export default WelcomeMessage;