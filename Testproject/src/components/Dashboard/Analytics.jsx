import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [76, 67, 61, 90],
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            },
            barLabels: {
              enabled: true,
              useSeriesColors: true,
              margin: 8,
              fontSize: '16px',
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
            },
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={390} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default function Analytics() {
  return (
    <Card sx={{ minWidth: 275, width: '92%', height: '95%', display: 'flex', flexDirection: 'column' }}>
      <CardContent style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Analytics
        </Typography>
        <div style={{ flex: '1', minHeight: 0 }}>
          <ApexChart />
        </div>
      </CardContent>
    </Card>
  );
}
