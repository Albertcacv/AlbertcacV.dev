import { JSX } from 'preact';
import GithubSVG from '../GithubSVG';
import LinkedinSVG from '../LinkedinSVG';
import TwitterSVG from '../TwitterSVG';
import styles from './styles.module.css';

const ICONS: { [name: string]: JSX.Element } = {
	Linkedin: <LinkedinSVG />,
	Twitter: <TwitterSVG />,
	Github: <GithubSVG />,
};

const OPTIONS = [
	{
		title: 'Linkedin',
		url: 'https://www.linkedin.com/in/albertcacv/',
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/AlbertcacV',
	},
	{
		title: 'Github',
		url: 'https://github.com/Albertcacv',
	},
];

const Social = () => {
	return (
		<section className={styles.socialSection}>
			<ul className={styles.socialList}>
				{OPTIONS.map(({ title, url }) => (
					<li className={styles.socialItem}>
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							{ICONS[title]}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Social;
