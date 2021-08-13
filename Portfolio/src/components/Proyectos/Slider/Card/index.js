import StackIcon from '../../../StackTech/StackIcon'

import styles from '../../../../styles/Card.module.css'
// TODO: Modal with the project info

export default function Card({ title }) {
  return (
    <article className={styles.card}>
      {/* <h3 className={styles.card__title}>{title}</h3> */}

      <img
        className={styles.card__img}
        src="https://static2.bigstockphoto.com/3/9/2/large1500/293553937.jpg"
        alt=""
      />
      <div>
        <footer className={styles.card__footer}>
          <button>
            <StackIcon title="Github" iconClass="devicon-github-original" />
          </button>
          <button>
            <StackIcon title="Preview" iconClass="devicon-github-original" />
          </button>
        </footer>
      </div>
    </article>
  )
}
