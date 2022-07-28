import * as React from "react";
import style from "../styles/signup.module.scss";
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
interface IFormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    router.push("/");
  });

  return (
    <div className={style.signup}>
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
            Sign up
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
                  type="email"
                  label="Email"
                  autoComplete="email"
                  color="success"
                  error={!!errors.email}
                  {...register("email", { required: true, pattern: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/ })}
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
                <Link href="/login">already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
