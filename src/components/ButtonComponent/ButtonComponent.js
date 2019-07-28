import React from 'react'
import { Button } from 'reactstrap'

const ButtonComponent = ({ color, children, onClick, type, className }) =>
	<Button
		color={color}
		onClick={onClick}
		type={type}
		className={className}
	>
	{children}
	</Button>

export default ButtonComponent