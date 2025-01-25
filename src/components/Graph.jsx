// src/components/Graph.js
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';


const Graph = ({ metric, device }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [metric, device]);

  const options = {
    title: { text: `Metric: ${metric}, Device: ${device}` },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: data ? data.timestamps : [] },
    yAxis: { type: 'value' },
    series: [
      {
        data: data ? data.values : [],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Graph;
