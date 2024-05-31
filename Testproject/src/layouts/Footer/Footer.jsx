import React from 'react'
import {
    Box,
    Link,
    Typography,
    
  } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{p:6, textAlign:'center'}}>
            <Typography>© 2023 All rights reserved by <Link href="https://www.wrappixel.com">Wrappixel.com</Link> </Typography>
        </Box>
     );
}
 
export default Footer;