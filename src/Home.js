import GoalList from "./GoalList";
import useFetch from "./useFetch";


const Home = () => {
  const { error, isPending, data: goals } = useFetch('/goals')
  const { e, p, data: senti } = useFetch('/senti')




  return (
    <div className="Home">
      {/* <h1>Your Feeling Score</h1>
      <p>Your score is: {score}</p> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {goals && <GoalList goals={goals.slice(1)} senti={goals[0]} />}
    </div>
  );
}

export default Home;