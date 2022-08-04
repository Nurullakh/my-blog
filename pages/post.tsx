import Head from 'next/head';

import { Grid, Box, Typography, Container } from '@mui/material';

export const Post = () => {
  return (
    <>
      <Head>
        <title>Post title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component="main">
        <Box
          sx={{
            paddingTop: 4,
          }}>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 500,
            }}
            component="h1"
            variant="h2">
            15 Disadvantages Of Freedom And How You Can Workaround It.
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                фыв
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
