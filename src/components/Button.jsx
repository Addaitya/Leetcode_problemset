/* eslint-disable react/prop-types */
const Button = ({style, handleClick, index}) =>{

  return(
    <>
      <button style={{background: style}} onClick={() => handleClick(index)}>{index + 1}</button>
    </>
  );
}

export default Button;