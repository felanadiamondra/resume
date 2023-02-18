import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import { Grid } from '@mui/joy';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from 'react';

// create WorkPanel component
const WorkPanel = () => {
    const [professionalExperiences, setProfessionalExperiences] = useState([{

        jobTitle : 'Software Engineer',
        companyName : 'Futurmap',
        employmentDates: 'October 2022 - Present',
        jobDescription: '• Designed and implemented new features for the company\'s flagship product\n• Collaborated with team members to improve product performance and reliability\n• Conducted code reviews and provided feedback to other developers'
    }, 
    {

        jobTitle : 'Web Developer',
        companyName : 'Jirama',
        employmentDates: 'June 2020 - September 2022',
        jobDescription: '• Designed and implemented new features for the company\'s flagship product\n• Collaborated with team members to improve product performance and reliability\n• Conducted code reviews and provided feedback to other developers'
    }
    ]);

    return (
        <div>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {
                    professionalExperiences.map((experience , index) => (
                        <Grid xs={6}>
                            <Card variant="outlined" sx={{ width: 320 }}>
                            <CardOverflow>
                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            <Link href="#multiple-actions" overlay underline="none">
                                {experience.jobTitle}
                            </Link>
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                            {/* <Link href="#multiple-actions">California</Link> */}
                            </Typography>
                            <Divider inset="context" />
                            <CardOverflow
                            variant="soft"
                            sx={{
                                display: 'flex',
                                gap: 1.5,
                                py: 1.5,
                                px: 'var(--Card-padding)',
                                bgcolor: 'background.level1',
                            }}
                            >
                            <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                {experience.employmentDates}
                            </Typography>
                            <IconButton
                                aria-label="Like minimal photography"
                                size="md"
                                variant="solid"
                                color="danger"
                                sx={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    right: '1rem',
                                    bottom: 0,
                                    transform: 'translateY(50%)',
                                }}
                            >
                                <Favorite />
                            </IconButton>
                            <Divider orientation="vertical" />
                            <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                {experience.companyName}
                            </Typography>
                            </CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                loading="lazy"
                                alt=""
                                />
                            </AspectRatio>
                            </Card>
                        </Grid>
                    ))
                }
                
            </Grid>
        
        </div>
    );
}
// export WorkPanel component
export default WorkPanel;