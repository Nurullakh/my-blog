import React from 'react';

import { CardActionArea, Card, CardContent, Typography } from '@mui/material';

export default function Post() {
  return (
    <CardActionArea component="a" href="#">
      <Card
        sx={{
          display: 'flex',
          backgroundColor: 'transparent',
          color: '#fff',
          boxShadow: 'none',
        }}>
        <CardContent sx={{ padding: 0, flex: 1 }}>
          <Typography
            sx={{ marginBottom: '20px', color: '#6EEB83' }}
            component="h2"
            variant="h5">
            15 Disadvantages Of Freedom And How You Can Workaround It.
          </Typography>
          <Typography
            sx={{ marginBottom: '15px', flex: 1, fontSize: '12px' }}
            variant="subtitle1"
            color="#fff">
            27 MAY
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
