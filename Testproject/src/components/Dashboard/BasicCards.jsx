import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import { Grid } from "@mui/material";



export default function BasicCards() {
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          All Spending
        </Typography>
        <Typography>
          $574
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Earning
        </Typography>
        <Typography>
          $521
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4}xl={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weekly revenue
        </Typography>
        <Typography>
          $684
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4}xl={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New Clients
        </Typography>
        <Typography>
          $321
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  </Grid>
  );
}
