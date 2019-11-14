import React from "react"
import {Context} from "../Provider"
import highchartconfig from "../HighchartsConfig"
import ReactHighCharts from "react-highcharts"

const Chart = () => {
	return (
		<Context.Consumer>
			{() => {
				return <ReactHighCharts config={highchartconfig()}/>

			}}
		</Context.Consumer>
	)
}

export default Chart