import icon from '../../../styles/Icon.module.css'

export default function StackIcon({ title, iconClass }) {
  console.log(iconClass)
  return (
    <article className={icon.icon}>
      <span className={icon.icon__img}>
        <i className={iconClass} />
      </span>
      <h3 className={icon.text}>{title}</h3>
    </article>
  )
}
