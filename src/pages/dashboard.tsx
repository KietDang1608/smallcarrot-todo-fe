import DashboardTaskCard from "@/components/DashboardTaskCard";
import MainLayout from "@/components/MainLayout";
import { Add, AssignmentTurnedIn, ContentPaste, DataSaverOn, WorkHistory } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { TaskPriority } from "@/enums/task-priority.enum"; // Adjust path as needed
import { TaskStatus } from "@/enums/task-status.enum"; // Adjust path as needed

export default function DashboardPage() {
    const task = {
        id: "1",
        title: "Example Task",
        description: "This is an example task description.This is an example task description.This is an example task description.This is an example task description.This is an example task description.This is an example task description.",
        status: TaskStatus.UNDONE, // Use enum value
        priority: TaskPriority.MEDIUM, // Use enum value
        dueDate: new Date(),
        createdAt: new Date(),
        category: {
            id: "1",
            name: "Work",
            createdAt: new Date(),
        },
    };
    return (
        <MainLayout>
            {/* Main content of Dashboard Page */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#FAF7F3', // Background color
                    color: '#000000', // Text color
                }}
            >
                {/* Welcome box */}
                <Box
                    sx={{

                        padding: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        marginBottom: '16px',
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000000' }}>
                        Chào mừng đến với Dashboard
                    </Typography>
                </Box>
                {/* Box of content */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#FFFFFF', // White background for content box
                        height: '100%'
                    }}
                >
                    {/* Cover of Imcomming task */}
                    <Box
                        sx={{
                            marginRight: '16px',
                            padding: '16px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            backgroundColor: 'white', // Light color for incoming tasks
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#D9A299' }}>
                                <WorkHistory></WorkHistory> To-do
                            </Typography>
                            <Button>
                                <Add></Add>
                                Thêm công việc
                            </Button>
                        </Box>
                        {/* Add task cards here */}
                        <Box
                            sx={{
                                flex: 2,
                                width: '100%',    
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                boxSizing: 'border-box',     // ✅ giới hạn tính toán padding/margin trong width
                            }}
                        >
                            <DashboardTaskCard {...task} />
                        </Box>

                    </Box>
                    {/* Box of task status and completed task */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            padding: '16px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#white', // Light color for task status and completed tasks
                        }}
                    >
                        {/* Task status here */}
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                height: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <DataSaverOn sx={{ color: '#D9A299', alignItems: 'center', m: 2 }}></DataSaverOn>
                                <Typography variant="h6" sx={{ color: '#D9A299', alignItems: 'center' }}>
                                    Trạng thái
                                </Typography>

                            </Box>
                            {/* Add task status content here */}
                        </Box>
                        {/* Completed task here */}
                        <Box
                            sx={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                marginTop: '16px', // Add some space between task status and completed tasks
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <AssignmentTurnedIn sx={{ color: '#D9A299', alignItems: 'center', m: 2 }}></AssignmentTurnedIn>
                                <Typography variant="h6" sx={{ color: '#D9A299', alignItems: 'center' }}>
                                    Công việc đã hoàn thành
                                </Typography>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </MainLayout >
    );
}