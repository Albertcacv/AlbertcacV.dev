import QualificationCard from '../QualificationCard'

const EDUCATION_ITEMS = [
  {
    title: 'IT engineer',
    institution: 'University of León, Spain',
    date: '2018 - 2023',
  },
]
const Education = () => {
  return (
    <>
      {EDUCATION_ITEMS.map(({ id, title, institution, date }) => (
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

export default Education
