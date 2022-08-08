import Head from 'next/head';

import { useRouter } from 'next/router';

import { Grid, Box, Typography, Container } from '@mui/material';

function Post() {
  const router = useRouter();
  const { id } = router.query;

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
              color: '#6EEB83',
              fontWeight: 500,
              fontSize: '40px',
            }}
            component="h1"
            variant="h4">
            Post ID: {id}
            <br />
            15 Disadvantages Of Freedom And How You Can Workaround It.
          </Typography>
          <Box sx={{ mt: 3, color: '#fff' }}>
            <Typography
              paragraph
              sx={{
                fontWeight: 200,
                fontSize: '20px',
                lineHeight: '25px',
                color: '#A5A5A5',
              }}>
              written by @samurai2099
              <br /> on 27 may 2022
            </Typography>

            <Typography
              paragraph
              sx={{
                '&:first-letter': {
                  fontSize: '64px',
                  lineHeight: '1',
                },
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
              venenatis lectus magna fringilla urna. Aliquet porttitor lacus
              luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing
              vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed
              nisi lacus sed viverra tellus. Urna molestie at elementum eu
              facilisis sed odio morbi. Eget mi proin sed libero enim. Quis
              varius quam quisque id diam vel quam. Duis at tellus at urna
              condimentum mattis pellentesque. Nulla facilisi cras fermentum
              odio eu feugiat pretium nibh. Ut tellus elementum sagittis vitae
              et leo. Cursus in hac habitasse platea dictumst quisque sagittis
              purus. Odio facilisis mauris sit amet. Quis vel eros donec ac
              odio. Orci a scelerisque purus semper. Amet justo donec enim diam
              vulputate ut pharetra. Arcu odio ut sem nulla pharetra diam sit
              amet nisl. Sapien eget mi proin sed libero enim. Nunc sed blandit
              libero volutpat sed cras ornare arcu dui. Neque viverra justo nec
              ultrices dui sapien eget mi. Cras semper auctor neque vitae tempus
              quam pellentesque nec nam. Vitae tortor condimentum lacinia quis
              vel eros donec ac. Consectetur adipiscing elit pellentesque
              habitant morbi. Enim tortor at auctor urna nunc id cursus metus.
              Elit sed vulputate mi sit. Quis viverra nibh cras pulvinar mattis
              nunc sed. In aliquam sem fringilla ut morbi tincidunt. Orci a
              scelerisque purus semper. Dignissim sodales ut eu sem integer
              vitae justo.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Post;
