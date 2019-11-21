import React from "react"
import {Context} from "../../Provider"

const ConfirmFavourites = () => {
	return (
		<Context.Consumer>
		{(({confirmFavourites}) => {
				return <button 
					className="button settings__button"
					onClick={confirmFavourites}
				>Confirm Favourites</button>
			}
		)}
		</Context.Consumer>
	)
}

export default ConfirmFavourites;