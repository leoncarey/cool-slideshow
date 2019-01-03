import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/List';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import style from './styles.less';

class ReproductionList extends React.Component {
	constructor() {
		super();

		this.state = {
			open: false
		};
	}

	handleDrawerOpen() {
		this.setState({open: true});
	};

	handleDrawerClose() {
		this.setState({open: false});
	};

	render() {
		return (
			<div className={style.reproductionList}>
				<Fab color="secondary" className={style.openListButton} onClick={() => this.handleDrawerOpen()}>
					<ListIcon />
				</Fab>

				<Drawer
					className={style.list}
					variant="persistent"
					anchor="right"
					open={this.state.open}>

					<div>
						<IconButton onClick={() => this.handleDrawerClose()}>
							<ChevronRightIcon />
						</IconButton>
					</div>

					<Divider />

					<List>
						<ListItem button
								  className={style.listSubItem}>
							<ListItemIcon><ListIcon /></ListItemIcon>
							<ListItemText primary="lista de músicas"/>
						</ListItem>
					</List>

					<Divider />

					<List>
						<ListItem button
								  className={style.listSubItem}>
							<ListItemIcon><ListIcon /></ListItemIcon>
							<ListItemText primary="lista de músicas"/>
						</ListItem>
					</List>

				</Drawer>
			</div>
		);
	}
}

export default ReproductionList;