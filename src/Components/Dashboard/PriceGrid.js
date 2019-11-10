import React from "react"
import {Context} from "../Provider"
import CoinPrice from "./CoinPrice"

const PriceGrid = () => {
	return (
		<Context.Consumer>
			{(({pricesList, currentFav}) => {
				console.log(currentFav)
				return (
					<div className="coins__coinsgrid price-grid">
						{pricesList.map((coin, index) => {
				 			return (
				 				<CoinPrice 
				 					key={coin.symbol} 
				 					index={index}
									coin={coin} 
									currentFav={index === currentFav}
								/>
							)
					 	})
					 }
				 	</div>
				 )
				}
			)}
		</Context.Consumer>
	)
}

export default PriceGrid