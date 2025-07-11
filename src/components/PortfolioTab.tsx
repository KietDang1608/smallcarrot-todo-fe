import { GitHub } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";

export default function PortfolioTab() {
    return (
        <Box display={'flex'} flexDirection='column' alignItems='center' justifyContent='center' sx={{ padding: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#FAF7F3', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        mb: 2,
                        width: '70%',
                    }}
                >
                    <Typography>
                        Software Engineering
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000000', borderRadius: '4px', mb: 5, mt: 5 }}>
                        FULL-STACK DEVELOPER
                    </Typography>
                    <Typography textAlign={'justify'}>
                        I want to become a backend developer who builds secure, fast, and reliable systems. My goal is to grow
                        into a senior role, help junior developers, and work on meaningful projects. Eager to contribute as a backend
                        developer by building secure, scalable systems. I aim to grow into a senior role where I can design backend
                        architecture and mentor junior developers.
                    </Typography>
                    <Button
                        sx={{
                            mt: 2,
                            backgroundColor: '#F0E4D3',
                            color: '#000000',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#D9C6B8',
                            },
                            padding: '10px 20px',
                        }}
                    >
                        <a href="https://github.com/KietDang1608" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} >
                            <GitHub sx={{ mr: 1 }} />
                            Visit My Github
                        </a>
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                    }}
                >
                    <img src="/imgs/myprofile.png" alt="" width='50%' />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 2,
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000', mb: 2 }}>
                    BACKEND TECHNOLOGIES
                </Typography>

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around', // căn đều giữa các item
                        alignItems: 'center',           // căn giữa theo chiều dọc
                        width: '100%',
                        mt: 2,
                        p: 0,
                    }}
                >
                    {[
                        "/imgs/nestjs_logo_icon.webp",
                        "/imgs/Node.js_logo.png",
                        "/imgs/Spring_Boot_Logo_full.png",
                        "/imgs/aspnet-core.jpg"
                    ].map((src, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: 'auto',
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                style={{
                                    width: '40%',

                                    objectFit: 'contain',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 2,
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000', mb: 2 }}>
                    FRONTEND TECHNOLOGIES
                </Typography>

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around', // căn đều giữa các item
                        alignItems: 'center',           // căn giữa theo chiều dọc
                        width: '100%',
                        mt: 2,
                        p: 0,
                    }}
                >
                    {[
                        "/imgs/react.webp",
                        "/imgs/next.png",
                        "/imgs/bootstrap.png",
                        "/imgs/leaf.png"
                    ].map((src, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: 'auto',
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                style={{
                                    width: '40%',

                                    objectFit: 'contain',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 2,
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000', mb: 2 }}>
                    LANGUAGES
                </Typography>

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around', // căn đều giữa các item
                        alignItems: 'center',           // căn giữa theo chiều dọc
                        width: '100%',
                        mt: 2,
                        p: 0,
                    }}
                >
                    {[
                        "/imgs/js.png",
                        "/imgs/ts.png",
                        "/imgs/java.png",
                        "/imgs/php.png",
                        "/imgs/cs.png",
                        "/imgs/py.png",
                        "/imgs/cp.png",
                    ].map((src, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: 'auto',
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                style={{
                                    width: '40%',

                                    objectFit: 'contain',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 2,
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000', mb: 2 }}>
                    TOOLS/PLATFORMS
                </Typography>

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around', // căn đều giữa các item
                        alignItems: 'center',           // căn giữa theo chiều dọc
                        width: '100%',
                        mt: 2,
                        p: 0,
                    }}
                >
                    {[
                        "/imgs/docker.svg",
                        "/imgs/git.png",
                        "/imgs/postman.png",
                        "/imgs/swagger.png",

                    ].map((src, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: 'auto',
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                style={{
                                    width: '40%',

                                    objectFit: 'contain',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 2,
                }}
            >
                <Typography borderBottom={1} variant="h5" sx={{ fontWeight: 'bold', color: '#000000' }}>
                    WORK EXPERIENCE
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        mt: 2,
                        p: 2,

                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', mt: 2 }}>
                        VNA GROUP - Backend Developer Intern
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                        May 2025 - July 2025
                    </Typography>
                </Box>
                <Box
                    sx={{
                        textAlign: 'justify',
                        alignItems: 'left',
                    }}
                >
                    <Typography variant="body1" sx={{ color: '#555', mt: 2, ml: 2 }}>
                        Responsibilities:
                    </Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            paddingLeft: 3,
                            marginTop: 1,
                            color: '#333',
                            fontSize: '0.9rem',
                        }}
                    >
                        <ListItem sx={{ display: 'list-item' }}>Developed backend features for a Labor Safety & Hygiene Reporting System using NestJS and
                            PostgreSQL.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Designed and implemented RESTful APIs for modules including: Authentication, Enterprise
                            Management, User Management, Role & Permission, Report Configuration, and Safety Report
                            Submission.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Integrated JWT-based authentication and role-based access control (RBAC) using NestJS guards and
                            decorators</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Applied TypeORM for database modeling and interactions.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Ensured clean, modular code architecture using DTOs, Pipes, and custom validation logic.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Collaborated using GitLab and tested APIs thoroughly with Postman.
                        </ListItem>
                    </List>
                    <Typography variant="body1" sx={{ color: '#555', mt: 2, ml: 2 }}>
                        Technologies used:
                    </Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            paddingLeft: 3,
                            marginTop: 1,
                            color: '#333',
                            fontSize: '0.9rem',
                        }}
                    >
                        <ListItem sx={{ display: 'list-item' }}>Backend: NestJS, TypeScript, Node.js</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Database: PostgreSQL, TypeORM</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Tools: GitLab, Postman, Swagger
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Libraries: JWT, pdfmake, exceljs, nodemailer, class-validator, Supabase
                        </ListItem>
                    </List>
                </Box>
            </Box>

        </Box>
    );
}