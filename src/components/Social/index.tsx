import styles from './styles.module.css';
const OPTIONS = [
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/albertcacv/',
		icon: '../../assets/linkedin.svg',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/AlbertcacV',
		icon: '../../assets/twitter.svg',
	},
	{
		name: 'Github',
		url: 'https://github.com/Albertcacv',
		icon: '../../assets/github.svg',
	},
];
const Social = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.h2}>Social</h2>
			<div className={styles.social}>
				{OPTIONS.map((option) => (
					<a href={option.url} target='_blank' rel='noopener noreferrer' className={styles.link}>
						<img src={option.icon} alt={option.name} />
					</a>
				))}
			</div>
		</section>
	);
};

export default Social;
