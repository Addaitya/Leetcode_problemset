/* eslint-disable react/prop-types */
import Button from "./Button";

const Buttons = ({noOfButtons, changeProblemSet, selectedSet}) => {

  const handleClick = (index) => changeProblemSet(index)
  
  return(
    <>
      {
        // from returns array of n(noOfButtons) button elements
        // {length: noOfButton} is a object to convert an array
        Array.from({length: noOfButtons}, (_ , index) => {
          let color = 'lightgrey';
          
          if(index == selectedSet){
            color = 'white';
          }
          // what is right key to set here?
          return (<Button style={color} key={index + 1} handleClick={handleClick} index={index} />)
        })
      }
    </>
  )
}

export default Buttons