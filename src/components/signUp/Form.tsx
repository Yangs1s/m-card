import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from 'react'
import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import Spacing from '@shared/Spacing'
import { css } from '@emotion/react'
import FixedBottomButton from '@shared/FixedBottomButton'
import { IformValues } from '@models/signUp'
import validator from 'validator'

function ValidateField(formValues: IformValues) {
  let errors: Partial<IformValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '메일 형식을 확인해 주세요'
  }
  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이여야 합니다.'
  }
  if (formValues.name.length < 2) {
    errors.name = '이름은 2자 이상 입력해주세요'
  }

  if (formValues.passwordCheck.length < 8) {
    errors.passwordCheck = '비밀번호는 8자 이상이여야 합니다.'
  } else if (formValues.passwordCheck !== formValues.password) {
    errors.passwordCheck = '비밀번호가 일치하지 않습니다.'
  }

  return errors
}

const SignUpForm = ({
  onSubmit,
}: {
  onSubmit: (formValues: IformValues) => void
}) => {
  const [formValues, setFormValues] = React.useState<IformValues>({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  })
  const [dirty, setDirty] = useState<Partial<IformValues>>({})
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const errors = useMemo(() => {
    return ValidateField(formValues)
  }, [formValues])

  const handleDirty = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    setDirty((prevDirty) => ({
      ...prevDirty,
      [name]: 'true',
    }))
  }, [])
  const hasDisable = Object.keys(errors).length > 0
  return (
    <Flex direction="column" css={SignUpContainer}>
      <TextField
        label={'이메일'}
        name={'email'}
        value={formValues.email}
        onChange={handleChange}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        helpMessage={Boolean(dirty.email) ? errors.email : null}
        onBlur={handleDirty}
      />
      <Spacing size={16} direction={'vertical'} />
      <TextField
        label={'패스워드'}
        type={'password'}
        name={'password'}
        value={formValues.password}
        onChange={handleChange}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        helpMessage={Boolean(dirty.password) ? errors.password : null}
        onBlur={handleDirty}
      />
      <Spacing size={16} direction={'vertical'} />
      <TextField
        label={'패스워드 확인'}
        type={'password'}
        name={'passwordCheck'}
        value={formValues.passwordCheck}
        onChange={handleChange}
        hasError={Boolean(dirty.passwordCheck) && Boolean(errors.passwordCheck)}
        helpMessage={Boolean(dirty.passwordCheck) ? errors.passwordCheck : null}
        onBlur={handleDirty}
      />
      <Spacing size={16} direction={'vertical'} />
      <TextField
        label={'이름'}
        name={'name'}
        value={formValues.name}
        onChange={handleChange}
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        helpMessage={Boolean(dirty.name) ? errors.name : null}
        onBlur={handleDirty}
      />

      <FixedBottomButton
        disabled={hasDisable}
        type={'submit'}
        label={'회원가입 완료'}
        onClick={() => {
          onSubmit(formValues)
        }}
      />
    </Flex>
  )
}
const SignUpContainer = css`
  padding: 20px;
`
export default SignUpForm
