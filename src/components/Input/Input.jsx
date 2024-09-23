import React from 'react'

const Input = (props) => {
    const { size="medium" , ...rest} = props;
  return (
    <input className={`${size}`} {...rest}></input>
  )
}

export default Input