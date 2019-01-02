import React from "react";
import Typography from "@material-ui/core/Typography";
import NewWindow from "react-new-window";

import style from './style.less';

const ProjectorScreen = () => {
	return (
		<NewWindow copyStyles={true}
				   title="Tela do projetor"
				   name="Tela do projetor"
				   center="screen"
				   features={{
					   screenX: 0,
					   screenY: 0,
					   top: 0,
					   left: 0,
					   toolbar: true
				   }}>

			<div className={style.projectorScreen}>
				<Typography paragraph>
					Projector opened works!
				</Typography>
			</div>

		</NewWindow>
	);
};

export default ProjectorScreen;