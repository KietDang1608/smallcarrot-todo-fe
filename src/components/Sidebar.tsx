'use client';

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { CalendarMonth, Category, Dashboard, DashboardCustomize, Logout, Settings } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // ✅ dùng next/navigation cho client

const drawerWidth = 240;

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login'); // ✅ redirect sau khi logout
  };

  const menuItems = [
    { label: 'Trang chủ', icon: <HomeIcon />, path: '/' },
    { label: 'Dashboard', icon: <DashboardCustomize />, path: '/dashboard' },
    { label: 'Công việc', icon: <AssignmentIcon />, path: '/tasks' },
    { label: 'Lịch', icon: <CalendarMonth />, path: '/calendar' },
    { label: 'Bảng công việc', icon: <Dashboard />, path: '/board' },
    { label: 'Loại công việc', icon: <Category />, path: '/category' },
    { label: 'Cài đặt', icon: <Settings />, path: '/setting' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#D9A299',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Box
        m={2}
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: 'black',
          borderRadius: '8px',
        }}
      >
        <img
          src="/imgs/yooutube.png"
          alt="Logo"
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </Box>

      {/* Menu */}
      <List>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      {/* Logout */}
      <Box sx={{ mt: 'auto', mb: 2, mx: 2, backgroundColor: '#FAF7F3', borderRadius: '8px' }}>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} sx={{ cursor: 'pointer' }}>
            <ListItemIcon><Logout /></ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}
