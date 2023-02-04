
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';

// create EducationPanel component
const EducationPanel = () => {
    return (
        
        <div className="panel">
            <Grid container spacing={2} sx={{ flexGrow: 1}}>
                <Grid xs={8}>
                    <Card row variant="outlined" sx={{ background :'#fff', opacity : 0.5 }}>
                    <CardOverflow sx={{ background:"linear-gradient(90deg, #F24873  0%, #CC4C8F 100%)"}}>
                        <p style={{margin : '10px', color : '#fff'}}>2021 - 2022</p>
                    </CardOverflow>
                        <CardContent sx={{ px: 2 }}>
                            <Typography fontWeight="md" textColor="#008ECC" mb={0.5}>
                            En cours de Master 2 , ESTI
                            </Typography>
                            <Typography level="body2">Parcours Management des Systemes d'informations</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                   
                </Grid>
                <Grid xs={4}>
                    
                </Grid>
                <Grid xs={8}>
                    <Card row variant="outlined" sx={{ background :'#fff', opacity : 0.4 }}>
                        <CardContent sx={{ px: 2 }}>
                            <Typography fontWeight="md" textColor="#008ECC" mb={0.5}>
                            Master 1, ESTI 
                            </Typography>
                            <Typography level="body2">Parcours Management des Systemes d'informations</Typography>
                        </CardContent>
                        <CardOverflow>
                            <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                            </AspectRatio>
                        </CardOverflow>
                    </Card>
                </Grid>
                <Grid xs={8}>
                    <Card row variant="outlined" sx={{ background :'#fff', opacity : 0.4 }}>
                        <CardOverflow>
                            <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent sx={{ px: 2 }}>
                            <Typography fontWeight="md" textColor="#008ECC" mb={0.5}>
                            Formation Licene en Informatique, ESTI  
                            </Typography>
                            <Typography level="body2">Parcours Integration et developpement</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    
                </Grid>
                <Grid xs={4}>
                    
                </Grid>
                <Grid xs={8}>
                    <Card row variant="outlined" sx={{ background :'#fff', opacity : 0.4 }}>
                        <CardContent sx={{ px: 2 }}>
                            <Typography fontWeight="md" textColor="#008ECC" mb={0.5}>
                            Formation en NTIC, E-MEDIA  
                            </Typography>
                            <Typography level="body2"></Typography>
                        </CardContent>
                        <CardOverflow>
                            <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                            </AspectRatio>
                        </CardOverflow>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
// export EducationPanel component
export default EducationPanel;