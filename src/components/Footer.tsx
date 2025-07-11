import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#FAF7F3'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '} {new Date().getFullYear()} SmallCarrot TODO. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="/about" underline="hover">
            Giới thiệu
          </Link>{' '}
          ·{' '}
          <Link href="/contact" underline="hover">
            Liên hệ
          </Link>{' '}
          ·{' '}
          <Link href="/privacy" underline="hover">
            Chính sách
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
