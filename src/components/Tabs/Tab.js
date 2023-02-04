import React, { useState } from 'react'
import { Tabs , Tab,  } from '@mui/material'
import { Person, School , Engineering,
         Work, Assignment} from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PropTypes } from 'prop-types';
import SkillPanel from '../Panel/SkillPanel';
import ProjectPanel from '../Panel/ProjectPanel';
import WorkPanel from '../Panel/WorkPanel';
import EducationPanel from '../Panel/EducationPanel';
import BioPanel from '../Panel/BioPanel';

function TabPanel(props){
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function MyTab(){
    const [value , setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event, item) =>{
        setValue(item);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box 
            height='100vh'
            display='flex'
            flexDirection="column"
            style={{background:"linear-gradient(90deg, #4B1B4A 0%, #2E2063 100%)"}}
            >
            <AppBar position="static">
                <Tabs
                style={{background : "#0D052A"}}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                // variant="fullWidth"
                // aria-label="full width tabs example"
                aria-label="icon position tabs example"
                centered
                >
                <Tab icon={<Person />} label="ME" {...a11yProps(0)} />
                <Tab icon={<School />} label="EDUCATION" {...a11yProps(1)} />
                <Tab icon={<Engineering />} label="SKILLS" {...a11yProps(2)} />
                <Tab icon={<Work />} label="EXPERIENCE" {...a11yProps(3)} />
                <Tab icon={<Assignment />} label="PROJECTS" {...a11yProps(4)} />
                </Tabs>

             
            </AppBar>
            <div style={{display:'flex',
                alignItems: 'center',
                justifyContent : 'center',
                height: '100vh'}}>

                <SwipeableViews
                    flex={1}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                > 
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <BioPanel />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <EducationPanel />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <SkillPanel />
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <WorkPanel />
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <ProjectPanel />
                    </TabPanel>
                </SwipeableViews>
            </div>
            </Box>
     
    )
}


export default MyTab;