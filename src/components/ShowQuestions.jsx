/* eslint-disable react/prop-types */
import QuestionCard from './QuestionCard'

const ShowQuestions = ({questions}) =>{

  return(
    <table>
      <tbody>
        {
          questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
          ))
        }
      </tbody>
    </table>
  );
}

export default ShowQuestions;