import { ComponentChildren } from 'preact';

interface WrapperProps {
	children: ComponentChildren;
}

import styles from './wrapper.module.css';
const Wrapper = ({ children }: WrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
