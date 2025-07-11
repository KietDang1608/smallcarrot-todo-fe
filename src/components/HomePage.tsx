import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PortfolioTab from "./PortfolioTab";
import JobTab from "./JobTab";
import OtherInfoTab from "./OtherInfoTab";

export default function HomePage() {
    const [tab, setTab] = useState<'portfolio' | 'job' | 'otherinfo'>('portfolio');

    return (
        <Box >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#FAF7F3', // Màu nền trang chủ
                    width: '100%',
                    color: '#000000', // Màu chữ
                    py: 1,
                    borderBottom: 1, // Thêm đường viền dưới
                    borderColor: 'divider', // Màu đường viền

                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', backgroundColor: '#F0E4D3', p: '8px', borderRadius: '4px' }}>
                        Đặng Tuấn Kiệt
                    </Typography>
                </Box>
                <Tabs sx={{ display: 'flex', alignItems: 'center', mr: 3 }} value={tab} onChange={(e, newValue) => setTab(newValue)}>
                    <Tab label='Portfolio' value={'portfolio'} />
                    <Tab label='Công việc' value={'job'} />
                    <Tab label='Thông tin khác' value={'otherinfo'} />
                </Tabs>

            </Box>
            {tab === 'portfolio' && <PortfolioTab />}
            {tab === 'job' && <JobTab />}
            {tab === 'otherinfo' && <OtherInfoTab />}
        </Box>
    );
}