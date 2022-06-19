import React, { FC } from 'react';
import styles from './styles.module.css';
const NotFoundBtn: FC = () => {
	return (
		<a href='/' className={styles.button}>
			BACK TO HOME
		</a>
	);
};

export default NotFoundBtn;
