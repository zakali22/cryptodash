import React from "react"
import {Context} from "../Provider"
import {BounceLoader} from "react-spinners"
import CoinImage from "../CoinGrid/CoinImage"
import {css} from 'styled-components'

const override = css`
	display: block;
	justify-self: center;
	margin-top: 2rem
`

const customStyling = {
	height: 'auto'
}



const SpotlightGrid = () => {
	return (
		<Context.Consumer>
		{(({getCurrentFavCoinDetails}) => {
			let coinSpotlight = getCurrentFavCoinDetails();
			console.log(coinSpotlight)
			{return coinSpotlight ? 
				(
					<div className="dashboard__grid">
						<div className="dashboard__spotlight-coin"> 
							<p>{coinSpotlight.Name}</p>
							<CoinImage image={coinSpotlight.ImageUrl} symbol={coinSpotlight.Symbol} customStyling={customStyling} />
						</div>
						<p>Chart</p>
					</div>
				)
				: <BounceLoader loading={true} size={70} color={'#123abc'} css={override} />}

		}	
		)}
		</Context.Consumer>
	)
}

export default SpotlightGrid