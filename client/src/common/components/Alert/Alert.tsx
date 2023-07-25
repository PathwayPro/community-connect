import { FC } from "react";

import styles from './Alert.module.scss';

interface alertInterface {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	content?: string;
};


const CustomAlert: FC<alertInterface> = ({
	isOpen,
	onClose,
	title,
	content,
}) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.customAlertOverlay}>
			<div className={styles.customAlert}>
				<h2>{title}</h2>
				<p>{content}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default CustomAlert;
