import React from "react";
import Typography from "@material-ui/core/Typography";
import style from './style.less';
import image from './404.webp';

const NotFound = () => {
	return (
		<div className={style.notFound}>
			<div className={style.mainContainer}>
				<h1>404</h1>

				<Typography paragraph>
					Página não encontrada.
				</Typography>

				<img src={image} alt="Not found, man"/>

				<Typography paragraph>
					<a href="/">Tente outra vez aqui</a>
				</Typography>
			</div>
		</div>
	);
};

export default NotFound;