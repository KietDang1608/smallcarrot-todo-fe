import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

export default function GoogleSuccess() {
  const router = useRouter();

  useEffect(() => {
    const token = router.query.token;
    if (typeof token === 'string') {
      localStorage.setItem('access_token', token);

      // 🔁 Xoá ?token khỏi URL và chuyển về "/"
      router.replace('/');
    }
  }, [router]);

  return (
    <Container
        maxWidth={false}
        sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
        <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: 'center', color: 'primary.main' }}
        >
            Đang đăng nhập bằng Google...
        </Typography>
    </Container>
  );
}
