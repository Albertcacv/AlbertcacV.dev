import { Skill as SkillType } from '../../types/Skill';
import styles from './skill.module.css';

const Skill = ({ id, icon, iconName }: SkillType) => {
	return (
		<li className={styles.skill}>
			<img src={icon} alt='' className={styles.image} />
			<span className={styles.name}>{iconName}</span>
		</li>
	);
};

export default Skill;
