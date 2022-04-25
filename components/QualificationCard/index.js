import SQualificationCard from '../../UI/SQualificationCard'

const QualificationCard = ({ title, institution, date }) => {
  return (
    <SQualificationCard>
      <h3>{title}</h3>
      <p>{institution}</p>
      <p>{date}</p>
    </SQualificationCard>
  )
}

export default QualificationCard
