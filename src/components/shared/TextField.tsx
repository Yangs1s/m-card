import React, { FocusEventHandler, InputHTMLAttributes } from 'react'
import Text from '@shared/Text'
import Input from '@shared/Input'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
  ref?: React.Ref<HTMLInputElement>
}

const TextField = ({
  label,
  hasError,
  helpMessage,
  ref,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const [focused, setFocused] = React.useState(false)

  const labelColor = hasError ? 'red' : focused ? 'blue' : undefined

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(true)
    onFocus?.(event)
  }
  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(false)
    onBlur?.(event)
  }
  return (
    <div>
      {label ? (
        <Text
          display={'inline-block'}
          typography="t5"
          style={{ marginBottom: 12 }}
          color={labelColor}
          textAlign={'start'}
        >
          {label}
        </Text>
      ) : null}
      <Input
        ref={ref}
        aria-invalid={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {helpMessage ? (
        <Text
          textAlign={'start'}
          color={labelColor}
          display={'inline-block'}
          typography={'t7'}
          style={{ marginTop: 6, fontSize: 12 }}
        >
          {helpMessage}
        </Text>
      ) : null}
    </div>
  )
}

export default TextField
