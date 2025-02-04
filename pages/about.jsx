// import Image from 'next/image'
import React from 'react'
import styles from '@/styles/About.module.css'
// import styled from "styled-components";

import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';


function About() {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>HOBBIES</div>
            <Box sx={{ width: '100%' }}>
            {/* <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" className={styles.row}>
                <Grid item xs={6}>
                    <ReactPlayer className={styles.youtube} url='https://www.youtube.com/watch?v=x40N9cvZ2mM' />
                </Grid>
                <Grid item xs={6}>
                    <ReactPlayer className={styles.youtube} url='https://youtu.be/IkIK0ZErRb0' />
                </Grid>
                <Grid item xs={6}>
                    <ReactPlayer className={styles.youtube} url='https://youtu.be/oWzvQ45AC04' />
                </Grid>
                <Grid item xs={6}>
                    <ReactPlayer className={styles.youtube} url='https://youtu.be/QiALuun2SA8' />
                </Grid>
            </Grid> */}
            </Box>
        </div>
        </>
    )
   }
   
   export default About

   //https://youtu.be/QiALuun2SA8