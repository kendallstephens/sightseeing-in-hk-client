import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    };

    // UNSAFE_componentWillMount() {
    //     return this.props.loggedInStatus ? this.redirect() : null
    // }
    
    handleChange = (e) => {
        // debugger
        const {name, value} =  e.target
        this.setState({ [name]: value })
    };

    
    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }
        

    // redirect = () => {
    //     this.props.history.push('/')
    // }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const {username, password} = this.state
        return (
            <div>
                <h1>Log In</h1>

                <form onSubmit={this.handleSubmit}>
                        <label>Username </label>
                        <input 
                            name="username" 
                            value={username} 
                            type="text" placeholder="Enter your username" 
                            onChange={this.handleChange} 
                        />
                        <br />
                        <label>Password </label>
                        <input 
                            name="password" 
                            value={password} 
                            type="password" 
                            placeholder="Enter your password" 
                            onChange={this.handleChange} 
                        />
                        <br/>
                    <button className="ui button" type="submit">Log In</button>

                    <div>
                        or <Link to='/signup'>Sign Up</Link>
                    </div>
                </form>

                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
                
            </div>
        )
    }
};

export default Login;