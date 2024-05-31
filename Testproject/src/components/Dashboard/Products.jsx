import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Sample data for top selling products
const topSellingProducts = [
  { id: 1, name: 'Product 1', image: 'image1.jpg', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', image: 'image2.jpg', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', image: 'image3.jpg', description: 'Description of Product 3' },
];

export default function Products() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Top Selling Products
        </Typography>
        <Grid container spacing={2}>
          {topSellingProducts.map(product => (
            <Grid item xs={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="subtitle1" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
