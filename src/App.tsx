import './App.css';
import { Login } from './components/Login';
import { User } from './models/User';

const users : User[] = [
  { name: "user", password: "pass" }
]

function App() {
  return (
    <Login popi={users} />
  );
}

export default App;
