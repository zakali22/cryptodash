export default function(isLight){
    console.log(isLight)
    return {
        colors: ['#55BF3B', '#DF5353', '#7798BF', '#aaeeee',
            '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: isLight ? 'white' : '#061a44',
            borderWidth: 0,
            className: 'dark-container',
            plotBorderWidth: 0
        },
        xAxis: {
            gridLineWidth: 0,
            labels: {
                style: {
                    color: isLight ? 'black' : '#A0A0A0'
                }
            },
            lineColor: isLight ? 'black' : '#A0A0A0',
            tickColor: isLight ? 'black' : '#A0A0A0',
            title: {
                style: {
                    color: isLight ? 'black' : '#CCC',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            gridLineWidth: 0,
            labels: {
                style: {
                    color: isLight ? 'black' : '#A0A0A0'
                }
            },
            lineColor: isLight ? 'black' : '#A0A0A0',
            minorTickInterval: null,
            tickColor: isLight ? 'black' : '#A0A0A0',
            tickWidth: 1,
            title: {
                style: {
                    color: isLight ? 'black' : '#CCC',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'
                }
            }
        },
        tooltip: {
            backgroundColor: isLight ? 'black' : 'rgba(0, 0, 0, 0.75)',
            style: {
                color: isLight ? 'white' : '#F0F0F0'
            }
        },
        toolbar: {
            itemStyle: {
                color: isLight ? 'black' : 'silver'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    color: '#CCC'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            spline: {
                marker: {
                    lineColor: '#333'
                }
            },
            scatter: {
                marker: {
                    lineColor: '#333'
                }
            },
            candlestick: {
                lineColor: 'white'
            }
        },
        legend: {
            backgroundColor: isLight ? 'black' : 'rgba(0, 0, 0, 0.5)',
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: isLight ? 'white' : '#A0A0A0'
            },
            itemHoverStyle: {
                color: isLight ? 'black' : '#FFF'
            },
            itemHiddenStyle: {
                color: '#444'
            },
            title: {
                style: {
                    color: isLight ? 'black' : '#C0C0C0'
                }
            }
        },
        labels: {
            style: {
                color: '#CCC'
            }
        },
        credits: {
            enabled: false
        }

    }
};