import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardHeader,List,CardContent,CardActions} from '@material-ui/core';
import {IconButton,Typography,Collapse,Grid,Button,Tooltip} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    cardHeader:{
      fontFamily:"Jolly Lodger",
      backgroundColor:"#E0E0E0",
      color:"#6D4C41"
    },
  }));

function JobComp (props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <Grid item xs={12} sm={6} md={10}>
            <Card className={classes.root}>
                <CardHeader className={classes.cardHeader}
                    title={props.job.title}/>
                <CardContent>
                    {props.job.company ? 
                        <Typography variant="body2" component="h2">
                            Company : {props.job.company}
                        </Typography> : null
                    }
                    {props.job.category ?
                        <Typography variant="body2" color="textSecondary" component="p">
                            Category : {props.job.category}
                        </Typography> : null
                    }
                    {props.job.city ? 
                        <Typography variant="body2" component="h2">
                            Loaction : {props.job.city} , {props.job.state}   
                        </Typography> : null
                    }
                    <Typography variant="body2" color="textSecondary" component="p">
                         <a href={props.job.url} target="_blank">Apply Here</a>
                    </Typography> 
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="Show More..">
                        <IconButton
                            className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon style={{color:"#6D4C41"}}/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="body2" component="h2">More Info</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.job.body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}


export default JobComp;