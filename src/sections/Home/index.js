import React from "react";
import Typography from "@material-ui/core/Typography";
import style from './style.less';

const Home = () => {
	return (
		<div className={style.home}>
			<Typography paragraph>
				Olá!<br/>
				Seja bem vindo ao <strong>CoolSlideShow</strong>!
			</Typography>
		</div>
	);
};

export default Home;