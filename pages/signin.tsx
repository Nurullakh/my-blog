import * as React from "react";
import style from "../styles/auth.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import {IFormData} from '../types/signin'

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => {
    if (data.name === 'user' && data.password === '123456') {
      router.push("/");
    } else {
      setError(true)
    }
  });

  return (
    <div className={style.auth}>
      <Container component="main" maxWidth="xs">
        <Box
          className={style.box}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  label="Name"
                  color="success"
                  error={!!errors.name}
                  {...register("name", { required: true , minLength: 2})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  color="success"
                  error={!!errors.password}
                  {...register("password", { required: true, minLength: 6 })}
                />
              </Grid>
            </Grid>
            {error && <div className={style.error}>Некорректные данные</div>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup">Don&apos;t have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
