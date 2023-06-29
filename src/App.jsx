import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import BonusForm from './components/BonusForm'

const App = () => {
  const startingState = {
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  }

  const [login, setLogin] = useState(startingState)
  const [element, setElement] = useState(<p>Passwords must match.</p>)
  const [bonus, setBonus] = useState(null)

  const handleBonusChange = (event) => {
    setLogin({ ...login, [event.target.id]: event.target.value })
    if (
      event.target.id === 'password' &&
      event.target.value.length > 0 &&
      event.target.value.length < 7
    ) {
      setElement(
        <p className="invalid">Passwords must be at least 7 characters!</p>
      )
    } else if (
      event.target.id === 'passwordConfirm' &&
      login.password !== event.target.value
    ) {
      setElement(<p className="invalid">Passwords do not match!</p>)
    } else if (login.passwordConfirm > 0) {
      setElement(<p className="valid">Passwords match!</p>)
    } else if (login.password >= 7) {
      setElement(<p>Passwords must match.</p>)
    }
  }

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.id]: event.target.value })
  }

  const handleBonusSubmit = (event) => {
    event.preventDefault()
    if (
      login.password === login.passwordConfirm &&
      login.password.length >= 7
    ) {
      setLogin({ ...startingState, valid: true })
      setElement(<p className="valid">Success!</p>)
      const setIt = () => {
        setElement(<p>Passwords must match.</p>)
      }
      setTimeout(setIt, 3000)
    } else {
      setLogin({ ...login, passwordConfirm: '', password: '', valid: false })
      setElement(<p className="invalid">Passwords did not match!</p>)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (login.password === login.passwordConfirm) {
      setLogin({ ...startingState, valid: true })
      setElement(<p>Passwords match!</p>)
      const setIt = () => {
        setElement(<p>Passwords must match.</p>)
      }
      setTimeout(setIt, 3000)
    } else {
      setLogin({ ...login, passwordConfirm: '', password: '', valid: false })
      setElement(<p>Passwords did not match!</p>)
      const setIt = () => {
        setElement(<p>Passwords must match.</p>)
      }
      setTimeout(setIt, 3000)
    }
  }

  const handleCancel = () => {
    setLogin(startingState)
  }

  const handleBonus = () => {
    setBonus(!bonus)
  }

  return (
    <>
      {bonus ? (
        <BonusForm
          login={login}
          handleChange={handleBonusChange}
          handleSubmit={handleBonusSubmit}
          handleCancel={handleCancel}
          handleBonus={handleBonus}
          element={element}
        />
      ) : (
        <Form
          login={login}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBonus={handleBonus}
          element={element}
        />
      )}
    </>
  )
}

export default App
