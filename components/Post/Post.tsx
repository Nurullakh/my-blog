import React from 'react';

import { CardActionArea, Card, CardContent, Typography } from '@mui/material';

interface PostProps {
  title: string;
  date: string;
  text: string;
}

export default function Post({ title, date, text }: PostProps) {
  return (
    <CardActionArea component="a" href="#">
      <Card
        sx={{
          display: 'flex',
          backgroundColor: 'transparent',
          color: '#fff',
          boxShadow: 'none',
        }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography
            sx={{ marginBottom: '20px', color: '#6EEB83' }}
            component="h2"
            variant="h5">
            {title}
          </Typography>
          <Typography
            sx={{ marginBottom: '15px', flex: 1, fontSize: '12px' }}
            variant="subtitle1"
            color="#fff">
            {date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
