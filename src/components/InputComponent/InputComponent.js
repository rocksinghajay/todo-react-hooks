import React from "react"
import { Input } from "reactstrap"

const InputComponent = ({
  type,
  value,
  placeholder,
  className,
  onChange,
  ...restProps
}) => (
  <Input
    type={type}
    value={value}
    placeholder={placeholder}
    className={className}
    onChange={onChange}
    {...restProps}
  />
)

export default InputComponent
