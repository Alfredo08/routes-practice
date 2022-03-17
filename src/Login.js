
function Login( props ){
    return(
        <form>
            <div>
                <label htmlFor="userName">
                    Username: 
                </label>
                <input type="text" id="userName" name="userName" />
            </div>
            <div>
                <label htmlFor="userPassword">
                    Password: 
                </label>
                <input type="password" id="userPassword" name="userPassword" />
            </div>
            <button type="submit">
                Login
            </button>
        </form>
    );
}

export default Login;