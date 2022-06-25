import styles from './styles.module.css';

type Option = {
	name: keyof typeof String;
	url: string;
};
const OPTIONS = [
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/albertcacv/',
		icon: '../../../assets/github_svg.png',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/AlbertcacV',
		icon: '../../../assets/twitter_svg.png',
	},
	{
		name: 'Github',
		url: 'https://github.com/Albertcacv',
		icon: '../../../assets/github_svg.png',
	},
];

const Social = () => {
	return (
		<section className={styles.socialSection}>
			<ul className={styles.socialList}>
				{OPTIONS.map(({ name, icon, url }) => (
					<li className={styles.socialItem}>
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							<img src={icon} alt={name} />
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Social;
