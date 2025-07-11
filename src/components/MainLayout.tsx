// components/MainLayout.tsx
import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FAF7F3' }}>
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Main content bên phải */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth={false} // ✅ Tắt giới hạn chiều rộng
          disableGutters   // ✅ Bỏ padding 2 bên nếu cần
          sx={{ flexGrow: 1, color: 'black' }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}
