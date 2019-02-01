import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
	width: '100%',
	marginTop: 20,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

function AddTask(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="O que precisa ser feito?" />
      <Divider className={classes.divider} />
      <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Paper>
  );
}


export default withStyles(styles)(AddTask);
