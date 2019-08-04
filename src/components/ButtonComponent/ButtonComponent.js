import React from "react"
import { Button } from "reactstrap"

const ButtonComponent = ({
  color,
  children,
  onClick,
  type,
  className,
  ...restProps
}) => (
  <Button
    color={color}
    onClick={onClick}
    type={type}
    className={className}
    {...restProps}
  >
    {children}
  </Button>
)

export default ButtonComponent
