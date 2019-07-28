import React from 'react'
import { Input } from 'reactstrap'

const InputComponent = ({ type, value, placeholder, className, onChange }) =>
	<Input
		type={type}
		value={value}
		placeholder={placeholder}
		className={className}
		onChange={onChange}
	/>

export default InputComponent