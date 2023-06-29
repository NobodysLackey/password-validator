const Form = ({ login, handleChange, handleSubmit, element, handleBonus }) => {

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={login.username}
          id="username"
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>

        <input
          type="password"
          placeholder="Password"
          value={login.password}
          id="password"
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          value={login.passwordConfirm}
          id="passwordConfirm"
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
        {element}
      </form>
      <div className="bonus-button">
        <button className="bonus" onClick={handleBonus}>Bonus</button>
      </div>
    </div>
  )
}

export default Form
