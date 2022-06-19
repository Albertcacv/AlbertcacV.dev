import React, { FC } from 'react';
import Styles from './styles.module.scss';
const Button: FC = ({ text }) => {
	return (
		<a href='/' className={Styles.button}>
			{text}
		</a>
	);
};

export default Button;
