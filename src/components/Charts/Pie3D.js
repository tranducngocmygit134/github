import React from 'react';

// import react fusion component
import ReactFC from 'react-fusioncharts';

// import the fusionchart library
import FusionCharts from 'fusioncharts';

// import chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// import fusion theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// adding charts theme as dependency
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d', // The chart type
    width: '100%',
    height: 400,
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
