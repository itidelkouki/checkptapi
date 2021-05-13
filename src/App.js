import "./App.css";
import UserList from "./UserList";
import { Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Navbar";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Nav />
      <Route
        exact
        path="/"
        render={() => <UserList users={users} loading={loading} />}
      />
      <Route
        path="/details/:userId"
        render={(props) => (
          <UserDetails {...props} users={users} loading={loading} />
        )}
      />
      <Footer />,
    </div>
  );
}
