import QualificationCard from '../QualificationCard'

const WORK_ITEMS = [
  {
    title: 'Software engineer',
    institution: 'HP - CDS',
    date: '2021 - 2022',
  },
]
const Work = () => {
  return (
    <>
      {WORK_ITEMS.map(({ id, title, institution, date }) => (
        <QualificationCard
          key={id}
          title={title}
          institution={institution}
          date={date}
        />
      ))}
    </>
  )
}

export default Work
