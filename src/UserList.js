
import UserCard from "./UserCard";

export default function UserList({ users, loading }) {


  return (
    <div className="list-cards">
      {loading ? (
        <p>...loading </p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
      ;
    </div>
  );
}
