import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        theme: 'fusion',
        caption: 'Most Popular',
        paletteColors:
          '#2caeba, #2ecc71 ,#FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        yAxisName: 'Stars',
        yAxisNameFontSize: '16px',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
