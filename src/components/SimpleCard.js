import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.cost}
        </Typography>
        <img src={props.imageSource} alt={props.title} />
      </CardContent>
      <CardActions>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}>
          <AddIcon />
        </ToggleButton>
      </CardActions>
    </Card>
  );
}
