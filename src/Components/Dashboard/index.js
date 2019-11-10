import React from "react";
import CoinListings from "../CoinGrid/CoinListings"
import Loader from "../Layout/Loader"
import PriceGrid from "./PriceGrid"

const Dashboard = ({page}) => {
	return (
		<Loader page={page}>
			<PriceGrid />
		</Loader>
	)
}

export default Dashboard