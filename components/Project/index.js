import Image from 'next/image'
import React from 'react'
import SecondaryActionButton from '../SecondaryActionButton'
import styles from './project.module.css'
const Project = ({ title, description, image, viewLink, codeLink }) => {
  return (
    <article>
      <div className={styles.image}>
        <Image src={image} alt='project image' width={500} height={300} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p>{description}</p>
      <div className={styles.buttons}>
        <SecondaryActionButton path={viewLink} title='View project' />
        <SecondaryActionButton path={codeLink} title='View code' />
      </div>
    </article>
  )
}

export default Project
