import React,{useState,useEffect} from 'react';
import {CssBaseline, Button, Grid, Typography, Container, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import utils from '../../utils/utils';
import JobComp from './job-component';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 4),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    header:{
      fontFamily:"Jolly Lodger",
      letterSpacing:10
    },
    btns:{
      fontFamily:"Jolly Lodger",
      letterSpacing:5,
      color:"#F57C00",
      border:`1px solid #6D4C41`
    }
  }));

  function JobsContainerComp () {
    const [allJobs,setAllJobs]  = useState([]);
    const [searchToggle,setSearchToggle] = useState(false);
    const [keySearch,setKeySearch] = useState("");
    const [searchRes,setSearchRes] = useState([]);
    const classes = useStyles();

    const searchToggleHandle = () => {
        setSearchToggle(true);
        let jobs = allJobs.filter(m => 
            m.title.toLowerCase().includes(keySearch.toLowerCase()) || 
            m.body.toLowerCase().includes(keySearch.toLowerCase()) || 
            m.company.toLowerCase().includes(keySearch.toLowerCase()));
        setSearchRes(jobs);
      }

    const searchHandle = (e) => {
        setKeySearch(e.target.value);
        let len = e.target.value
        if(len.length < 4) setSearchToggle(false);
      }

    useEffect(() => {

        const getAllJobs = async () => {
            let jobs = await utils.getAllJobs()
            if (jobs) {
                setAllJobs(jobs)
            }
        }
        getAllJobs();

        return () => getAllJobs();
    },[])
     
    return allJobs.length > 0 ? (
        <div>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" 
                                    variant="h2" 
                                    align="center" 
                                    color="textPrimary" 
                                    gutterBottom
                                    className={classes.header}>
                            Jobs Search
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12} sm={6} md={8}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="keySearch"
                                        label="Find Job"
                                        name="keySearch"
                                        size="small"
                                        type="search"
                                        value={keySearch}
                                        onChange={searchHandle}
                                        className={classes.btns}/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Button 
                                        variant="outlined" 
                                        color="primary"
                                        onClick={searchToggleHandle}
                                        className={classes.btns}>Find</Button>
                                </Grid>
                            </Grid>
                        </div>    
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={3}>
                        {   
                            searchToggle ? searchRes.map((job,i) => {
                                return (<JobComp key={i} job={job}/>)
                              })
                            :
                            allJobs.map((job,i) => {
                               return (
                                <JobComp key={i} job={job} />
                               ) 
                            })
                        }
                    </Grid>
                </Container>
            </main>
        </div>
    ) : <div></div>
  }

  export default JobsContainerComp;