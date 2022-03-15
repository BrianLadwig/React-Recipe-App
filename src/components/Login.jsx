

export default function Login() {


  function handleLogin(){
    console.log('hallo');
  }
  return (
    <div className="login">
      <input type="email" name="email" placeholder="email" />
      <br />
      <input type="password" name="password" placeholder="password" />
      <br />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}
