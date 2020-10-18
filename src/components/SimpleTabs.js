import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './cards';
import './tab.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} className="tabs">
          <Tab label="Premium Rooms" {...a11yProps(0)} />
          <Tab label="Standard Rooms" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="scroll">
        <Grid container spacing={3} justify="center">
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
        </Grid>
        <br />
        <Typography variant="h4" color="primary" className="marketing">
           Marketing
        </Typography>
        <br />
        <Grid container spacing={3} justify="center">
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} className="scroll">
        <Grid container spacing={3} justify="center">
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
        </Grid>
        <br />
        <Typography variant="h4" color="primary" className="marketing">
          Marketing
        </Typography>
        <br />
        <Grid container spacing={3} justify="center">
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
          <Grid item><SimpleCard title="Gaming Chair" cost="2000" imageSource="./assets/chair.jpg" /></Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
