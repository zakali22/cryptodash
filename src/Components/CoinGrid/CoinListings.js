import React from "react"
import {Context} from "../Provider"
import Coin from "./Coin"

const renderLimitedList = (coinslist, type, favouriteCoins) => {
	return type ? favouriteCoins : Object.keys(coinslist).slice(0, 50)
}

const CoinsListing = ({type}) => {
	return (
		<Context.Consumer>
		{(({coinsList, favouriteCoins, addFavourites, removeFavourites, isInFavourites}) => {
				return (
					<div className="coins__coinsgrid">
						{renderLimitedList(coinsList, type, favouriteCoins).map(coin => {
							return <Coin 
										key={coin} 
										coin={coinsList[coin]} 
										type={type} 
										addFavourites={addFavourites} 
										removeFavourites={removeFavourites}  
										isInFavourites={isInFavourites}/>
						})}
					</div>
				)
			}
		)}
		</Context.Consumer>
	)
}

export default CoinsListing