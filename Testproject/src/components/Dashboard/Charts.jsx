import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import Analytics from "../../components/Dashboard/Analytics";

export default function Charts() {
  const options = {
    chart: {
      type: 'line',
      height: '100%', // Adjust height to fill the available space
    },
    series: [{
      name: 'Total Spents',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} sx={{ marginTop: 3}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total Spents
            </Typography>
            <Typography>
              $682.5
            </Typography>
            <Chart options={options} series={options.series} type="line" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} sx={{ marginTop: 2 }}>
        <Analytics />
      </Grid>
    </Grid>
  );
}
