"use client";

import SideBar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import HomePage from "@/components/HomePage";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    // <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FAF7F3' }}>
    //   {/* Sidebar bên trái */}
    //   <SideBar />

    //   {/* Main content bên phải */}
    //   <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
    //     <Container maxWidth={false} // ✅ Tắt giới hạn chiều rộng
    //       disableGutters   // ✅ Bỏ padding 2 bên nếu cần
    //       sx={{ flexGrow: 1, color: 'black'}}>
    //       <HomePage />
    //     </Container>
    //     <Footer />
    //   </Box>
    // </Box>
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
