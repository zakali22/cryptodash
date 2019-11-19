import React from "react"
import {Context} from "../Provider"
import Coin from "./Coin"

const renderLimitedList = (coinslist, type, favouriteCoins, filteredCoins) => {
	return type ? favouriteCoins : (filteredCoins !== null ? (filteredCoins.length >= 50 ? filteredCoins.slice(0, 50) : filteredCoins) : Object.keys(coinslist).slice(0, 50))
}

const CoinsListing = ({type}) => {
	return (
		<Context.Consumer>
		{(({coinsList, favouriteCoins, addFavourites, removeFavourites, isInFavourites, filteredCoins}) => {
				return (
					<div className="coins__coinsgrid">
						{ renderLimitedList(coinsList, type, favouriteCoins, filteredCoins).map(coin => {
							return <Coin 
										key={coin} 
										coin={coinsList[coin]} 
										type={type ? type : false} 
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