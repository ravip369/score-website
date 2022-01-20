import React from 'react';
import {Button,Box,Typography,Grid,Container} from '@material-ui/core';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container direction="column" alignItems="stretch" className={classes.score}>
                <Grid item xs={6} sm={5}style={{ marginTop: '5%', marginLeft: '8%' }}>
                    <h2 className={`${classes.heading}`}>SCORE</h2>
                    <h6 className={classes.iit}>IIT Roorkee</h6>
                    <p className={classes.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Button className={`${classes.homeButton} ${classes.learnCase}`} variant="contained"><span className={classes.btnText} style={{ color: '#191C4D' }}>Start Learning</span></Button>
                    <Button className={`${classes.homeButton} ${classes.knowMoreCase}`} variant="contained"><span className={classes.btnText} style={{ color: '#FFFFFF' }}>Know More</span></Button>
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="stretch" style={{ width: '100vw', height: '50vw'}}>
                <Grid item xs={6} sm={5} style={{ marginTop: '5%',marginLeft: '8%'}}>
                    <Typography variant="h2" className={classes.enactus}>Enactus</Typography>
                    <Typography variant="h6" className={classes.iitRoorkee}>IIT Roorkee</Typography>
                    <Typography className={classes.descEnactus}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, uat. </Typography>
                    <Button className={classes.btnKnow}><span className={classes.btnText} style={{ color: '#191C4D' }}>Know More</span></Button>
                </Grid>
                <Grid item xs={4} sm={4} style={{ marginTop: '7.5%',}}>
                    <img className={classes.imgEnactus} src='/images/enactus.png' />
                </Grid>
            </Grid>
        </Box>
        )
}

export default Home;