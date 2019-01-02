import React from "react";
import Typography from "@material-ui/core/Typography";

import style from './style.less';

const Bible = () => {
	return (
		<div className={style.bible}>
			<Typography paragraph>
				Bible works!
			</Typography>
		</div>
	);
};

export default Bible;