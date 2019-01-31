import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AddTask } from '../../components';

const styles = {

	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}



class Home extends React.PureComponent {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<AddTask />
			</div>
		);
	}
}


export default withStyles(styles)(Home);