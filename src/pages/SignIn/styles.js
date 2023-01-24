import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const FormLabel = styled(Form.Label)`
  font-size: 3rem;
  margin-top: 1rem;
`

export const FormWrapper = styled(Form)`
  margin: 10rem 50rem 10rem 50rem;
  height: 43.5vh;
`

export const FormControl = styled(Form.Control)`
  font-size: 1.2rem;
  height: 4rem;
`

export const SubmitButton = styled(Button)`
  font-size: 2rem;
  width: 20rem;
  margin-inline: 12rem;
  margin-top: 3rem;
`

export const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
