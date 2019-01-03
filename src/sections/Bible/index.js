import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Typography from "@material-ui/core/Typography";

import style from './style.less';

const Bible = ({bible}) => (
	<div className={style.bible}>
		<Typography paragraph>
			Bible works!<br/>
			{bible.version}
		</Typography>
	</div>
);

Bible.propTypes = {
	bible: PropTypes.object
};

const mapStateToProps = state => ({
	bible: state.bible
});


export default connect(
	mapStateToProps
)(Bible);