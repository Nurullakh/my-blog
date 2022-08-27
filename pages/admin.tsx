import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';
import { fetchCreatePost } from '../store/reducers/post/ActionPost';
import {
  Alert,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { IPostData } from '../types/createPost';

export default function CreatePost() {
  const dispatch = useAppDispatch();

  const [success, setSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostData>();

  const onSubmit = handleSubmit((data) => {
    dispatch(fetchCreatePost(data));
    setSuccess(true);
  });

  function onPostChange() {
    setSuccess(false);
  }

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Typography component="h1" variant="h5">
            Create your post
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{ mt: 3, width: '90%' }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Title"
                  color="success"
                  error={!!errors.title}
                  {...register('title', { required: true })}
                  onChange={success ? onPostChange : () => {}}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 5 }}>
                <TextField
                  multiline
                  fullWidth
                  required
                  rows={8}
                  label="Post"
                  type="post"
                  autoComplete="Your post"
                  color="success"
                  error={!!errors.post}
                  {...register('post', { required: true })}
                  onChange={success ? onPostChange : () => {}}
                />
              </Grid>
              {success && (
                <Grid item xs={12}>
                  <Alert severity="success">
                    Your post has been successfully created! Within a few
                    minutes you can see it on the main page ;)
                  </Alert>
                </Grid>
              )}
            </Grid>
            {success ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}>
                Post created!
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}>
                Create post
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
