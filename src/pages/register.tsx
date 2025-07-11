import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Link, Snackbar, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { redirectToGoogleLogin, register } from "@/lib/api/auth";

export default function RegisterPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        if (password !== confirmPassword) {
            setError("Mật khẩu không khớp!");
            setLoading(false);
            return;
        }

        try {
            const user = await register({ username, password });
            setSuccess(true);
            setTimeout(() => {
                router.push("/login"); // ⏳ Đợi rồi mới chuyển trang
            }, 2000);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth={false} sx={{ mt: 8 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                {/* Image Box */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                    }}
                >
                    <img
                        src="/imgs/login.png"
                        alt="Login Illustration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>

                {/* Form Box */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}
                    >
                        SMALLCARROT TODO
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
                    >
                        QUẢN LÝ CÔNG VIỆC CÁ NHÂN CỦA BẠN
                    </Typography>

                    <Typography component="h5" variant="h6"
                        sx={{
                            textAlign: 'left', // Aligns the text to the left
                            color: 'blue',     // Sets the text color to blue
                            fontWeight: 'bold', // Makes the text bold
                        }}
                    >
                        ĐĂNG KÝ TÀI KHOẢN
                    </Typography>

                    <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Mật khẩu"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Nhâp lại mật khẩu"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            Đăng ký
                        </Button>
                        <Button
                            onClick={redirectToGoogleLogin}
                            fullWidth
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
                                mt: 2,
                                mb: 2,
                                borderColor: '#ccc',
                                color: 'black',
                                '&:hover': {
                                    borderColor: '#aaa',
                                    backgroundColor: '#f9f9f9',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src="/imgs/google.webp"
                                alt="Google Icon"
                                sx={{ width: 24, height: 24, mr: 1 }}

                            >

                            </Box>
                            Đăng nhập bằng Google
                        </Button>
                        <Typography>
                            Đã có tài khoản? <Link href="/login" variant="body2">Đăng nhập ngay</Link>
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: 2,
                            }}
                        >
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={Boolean(error)}
                autoHideDuration={4000}
                onClose={() => setError('')}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
            <Snackbar
                open={success}
                autoHideDuration={2000}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Tạo tài khoản thành công!
                </Alert>
            </Snackbar>
        </Container>

    );
}
