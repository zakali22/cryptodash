import React from "react"
import {Context} from "../Provider"
import {BounceLoader} from "react-spinners"
import CoinImage from "../CoinGrid/CoinImage"
import {css} from 'styled-components'
import Chart from "./Chart"
import lightTheme from "../lightTheme"

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
		{(({getCurrentFavCoinDetails, historical, isLight}) => {
			let coinSpotlight = getCurrentFavCoinDetails();
			{return coinSpotlight ? 
				(
					<div className="dashboard__grid">
						<div className="dashboard__spotlight-coin" style={lightTheme(isLight)}> 
							<p>{coinSpotlight.Name}</p>
							<CoinImage image={coinSpotlight.ImageUrl} symbol={coinSpotlight.Symbol} customStyling={customStyling} />
						</div>
						{historical ? 
							<Chart isLight={isLight} /> : (
							<div className="chart-loader" style={lightTheme(isLight)}>	
								<BounceLoader loading={true} size={70} color={'#123abc'} />
							</div>
							)
						}
					</div>
				)
				: <BounceLoader loading={true} size={70} color={'#123abc'} css={override} />}

		}	
		)}
		</Context.Consumer>
	)
}

export default SpotlightGrid