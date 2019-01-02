import React from 'react';
import {NavLink} from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BookIcon from '@material-ui/icons/Book';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import OpenNewIcon from '@material-ui/icons/OpenInNew';
import NotificationIcon from '@material-ui/icons/RecordVoiceOver';

import style from './styles.less';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<header className={style.header}>
				<Drawer
					className={style.menu}
					variant="permanent"
					anchor="left"
					open={true}>

					<div className={style.toolbar}>
						<a href="/">
							<h1>Cool<span>SlideShow</span></h1>
						</a>
					</div>

					<Divider />

					<List>
						<NavLink to="/bible">
							<ListItem button
									  className={style.listSubItem}>
								<ListItemIcon><BookIcon /></ListItemIcon>
								<ListItemText primary="Bíblia"/>
							</ListItem>
						</NavLink>

						<NavLink to="/playlist">
							<ListItem button
									  className={style.listSubItem}>
								<ListItemIcon><QueueMusicIcon /></ListItemIcon>
								<ListItemText primary="Lista de Músicas"/>
							</ListItem>
						</NavLink>

						<NavLink to="/warns">
							<ListItem button
									  className={style.listSubItem}>
								<ListItemIcon><NotificationIcon /></ListItemIcon>
								<ListItemText primary="Anúncios"/>
							</ListItem>
						</NavLink>

						<a href="/projector-screen" target="_top">
							<ListItem button
									  className={style.listSubItem}>
								<ListItemIcon><OpenNewIcon /></ListItemIcon>
								<ListItemText primary="Abrir tela do projetor"/>
							</ListItem>
						</a>
					</List>

					<a className={style.linkText} href="http://leonardocarey.com" target="_blank">
						Powered by Leonardo Carey
					</a>
				</Drawer>
			</header>
		);
	}
}

export default Header;