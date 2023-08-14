/* eslint-disable react/prop-types */
const QuestionCard = ({question}) =>{
  
  const colors = {
    "Easy": "green",
    "Medium": "rgb(255, 184, 0)",
    "Hard": "red"
  }

  return(
    <tr>
      <td>{question.title}</td>
      <td>{question.acceptance}%</td>
      <td style={{color :colors[question.difficulty]}}>{question.difficulty}</td>
    </tr>
  )
}

export default QuestionCard;