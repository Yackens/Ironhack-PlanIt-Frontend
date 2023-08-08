function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
  const authContext = useContext(AuthContext)
  const { authenticateUser } = authContext;
  const nav = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });
      console.log("here is the Login response", data);
      localStorage.setItem("authToken", data.token);
      await authenticateUser();
      nav("/categories");
    } catch (err) {
      console.log(err);
      setErrorMessage(err.response.data.errorMessage);
    }
  };

  return (
    <div>
      <div id="logo">
        <Link to='/'>
          <p>PlanIt</p>
        </Link>
      </div>
      
      <h1>Hey USER Just plan it!</h1>
      
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        
        <button type="submit">LogIn</button>
      </form>
      
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div> 
  );
}

export default Home;
