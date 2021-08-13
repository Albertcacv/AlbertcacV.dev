import StackIcon from './StackIcon'

import styles from '../../styles/StackTech.module.css'
export default function StackTech() {
  return (
    <>
      <h2>Stack Tech</h2>
      <section className={styles.Gallery}>
        <StackIcon title="HTML5" iconClass="devicon-html5-plain" />
        <StackIcon title="CSS" iconClass="devicon-css3-plain" />
        <StackIcon title="Javascript" iconClass="devicon-javascript-plain" />
        <StackIcon title="TypeScript" iconClass="devicon-typescript-plain" />
        <StackIcon title="Python" iconClass="devicon-python-plain" />
        <StackIcon title="React" iconClass="devicon-react-plain" />
        <StackIcon title="Vue" iconClass="devicon-vuejs-plain" />
        <StackIcon title="Next" iconClass="devicon-nextjs-plain" />
        <StackIcon title="SASS" iconClass="devicon-sass-plain" />
        <StackIcon title="Tailwind" iconClass="devicon-tailwindcss-plain" />
        <StackIcon title="NodeJS" iconClass="devicon-nodejs-plain" />
        <StackIcon title="MongoDB" iconClass="devicon-mongodb-plain" />
        <StackIcon title="MySQL" iconClass="devicon-mysql-plain" />
        <StackIcon title="Firebase" iconClass="devicon-firebase-plain" />
        <StackIcon title="Jest" iconClass="devicon-jest-plain" />
      </section>
    </>
  )
}
