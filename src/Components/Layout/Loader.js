import React from "react"
import {BounceLoader} from "react-spinners"
import {Context} from "../Provider"
import {css} from 'styled-components'

const override = css`
	display: block;
	justify-self: center;
	margin-top: 2rem
`

const Loader = (props) => {
	return (
		<Context.Consumer>
			{(({coinsList, pricesList, firstVisit, favouriteCoins}) => {
					if(props.page === "Settings"){
						if(coinsList){
							return props.children
						} else {
							return <BounceLoader loading={true} size={70} color={'#123abc'} css={override} />
						}
					}

					if(props.page === "Dashboard"){
						if(!favouriteCoins.length) return <p className="h2">You don't have any favourite coins. Please go to settings and choose favourites</p>
						if(pricesList && !firstVisit){
							return props.children
						} else {
							return <p>Loading prices</p>
						}
					}
				}
			)}
		</Context.Consumer>
	)
}

export default Loader;