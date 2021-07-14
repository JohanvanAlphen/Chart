import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
} from 'victory';

function Chart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        d3.csv('./data.csv').then(setData);
        console.log(setData)
    }, [])

    return (
        <div>
            <h1>Victory Tutorial</h1>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryBar
                    data={data}
                    x="assignment"
                    y="difficultRating"
                >
                </VictoryBar>
                <VictoryBar
                    data={data}
                    x="assignment"
                    y="funRating"
                >
                </VictoryBar>
            </VictoryChart>
        </div>
    )
}

export default Chart
