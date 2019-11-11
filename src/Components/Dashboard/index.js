import React from "react";
import CoinListings from "../CoinGrid/CoinListings"
import Loader from "../Layout/Loader"
import PriceGrid from "./PriceGrid"
import SpotlightGrid from "./SpotlightGrid"

const Dashboard = ({page}) => {
	return (
		<Loader page={page}>
			<PriceGrid />
			<SpotlightGrid />
		</Loader>
	)
}

export default Dashboard