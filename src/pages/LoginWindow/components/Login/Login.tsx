import React, { FormEvent, useState } from 'react'
import { loginUser } from '../../../../store/auth/actionCreators'
import { useAppDispatch } from '../../../../store'

const Login = () => {

    const dispatch = useAppDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(loginUser({login, password}))
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <div>
                    <label htmlFor='login'>Login</label>
                    <input name='login'
                     type="text"
                     value={login}
                     onChange={e => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input name='password'
                     type="password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login