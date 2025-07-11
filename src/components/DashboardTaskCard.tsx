import { Task } from "@/interfaces/task.interface";
import { MoreHorizRounded, PanoramaFishEye } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";

export default function DashboardTaskCard(task: Task) {
    return (
        <Card
            sx={{
                width: '100%',             // ✅ không vượt quá vùng chứa
                height: '100%',           // ✅ không vượt quá vùng chứa
                overflow: 'hidden',
                border: '1px solid #ccc',
                borderRadius: '8px',
                p: 2,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'row',
                boxSizing: 'border-box',
            }}
        >
            <PanoramaFishEye
                sx={{
                    mt: 0.5,
                    color: task.status === 'Hoàn thành' ? 'green' : 'red',
                    fontWeight: 'bold',
                }}
            />


            <Box
                sx={{
                    flex: 1,
                    ml: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                {/* Tiêu đề và button menu */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'gray',
                            fontWeight: 'bold',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {task.title} | {task.category.name}
                    </Typography>
                    <Button>
                        <MoreHorizRounded />
                    </Button>
                </Box>

                {/* Mô tả */}
                <Typography sx={{ mt: 1, color: '#555' }}>
                    {task.description}
                </Typography>

                {/* Thông tin bổ sung */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 1,
                        mt: 2,
                    }}
                >
                    <Typography fontSize={14}>
                        Độ ưu tiên:{" "}
                        <Box component="span"
                            sx={{
                                color:
                                    task.priority === 'Thấp' ? 'green' :
                                        task.priority === 'Trung bình' ? 'orange' : 'red',
                                fontWeight: 500,
                            }}
                        >
                            {task.priority}
                        </Box>
                    </Typography>

                    <Typography fontSize={14}>
                        Trạng thái:{" "}
                        <Box component="span"
                            sx={{
                                color:
                                    task.status === 'Hoàn thành' ? 'green' :
                                        task.status === 'Chưa làm' ? 'red' : 'gray',
                                fontWeight: 500,
                            }}
                        >
                            {task.status}
                        </Box>
                    </Typography>
                    <Typography fontSize={14}
                        sx={{
                            color: 'gray'
                        }}
                    >Hạn: {task.dueDate?.toLocaleDateString()}</Typography>
                </Box>
            </Box>
        </Card>
    );
}
