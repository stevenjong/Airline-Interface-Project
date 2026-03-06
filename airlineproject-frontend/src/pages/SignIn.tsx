import {useState, useEffect} from 'react'
import {getUsers} from '../services/api'

function SignIn(){
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])
    return(
        <div>
            <h1>Sign In</h1>
                <p>WORK IN PROGRESS</p>
                <h2>All Users</h2>
                {users.map(usersvar => (
                <div key = {usersvar.id}>
                    <h3>{usersvar.email}</h3>
                    <p>{usersvar.password_hash}</p>
                    <p>{usersvar.email}</p>
                </div>
            ))}
        </div>
    )
}

export default SignIn