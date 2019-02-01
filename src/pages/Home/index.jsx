import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AddTask, SelectTypeTask, NewCardTask } from '../../components';


const styles = {

	container: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column-reverse',
		alignItems: 'center',
		justifyContent: 'center'
	},
}



class Home extends React.PureComponent {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<NewCardTask />
				<SelectTypeTask />
				<AddTask />


</div>
		);
	}
}


export default withStyles(styles)(Home);
