import { Link } from 'react-router-dom';

const GoalList = ({ goals, senti }) => {

  const checkColor = (senti) => {
    let numDouble = parseFloat(senti)
    if (numDouble <= .25) {
      return "red"
    }
    else if (numDouble <= .5) {
      return 'yellow'
    } else {
      return "green"
    }

  };

  const getImage = (progress, senti) => {
    let numDouble = parseFloat(progress)
    console.log(numDouble)
    let numSenti = parseFloat(senti)
    if (numSenti <= .25) {
      if (numDouble <= 25) {
        return "./12.png"
      }
      else if (numDouble <= 50) {
        return './11.png'
      }
      else if (numDouble <= 75) {
        return "./10.png"
      } else {
        return "./9.png"
      }
    }
    else if (numSenti <= .5) {
      if (numDouble <= 25) {
        return "./8.png"
      }
      else if (numDouble <= 50) {
        return './7.png'
      }
      else if (numDouble <= 75) {
        return "./6.png"
      } else {
        return "./5.png"
      }
    } else {
      if (numDouble <= 25) {
        return "./4.png"
      }
      else if (numDouble <= 50) {
        return './3.png'
      }
      else if (numDouble <= 75) {
        return "./2.png"
      } else {
        return "./1.png"
      }

    }



  };

  const test = "./p0.png"

  return (
    <div className="goals-list" >
      {goals.map(goal => (
        <div className="goal-preview" key={goal.id} style={{ backgroundImage: `url(${getImage(goal.progress, senti)})` }}  >
          <Link to={`/goals/${goal.id}`}>
            <img src={require("" + getImage(goal.progress, senti))} alt={"logo"} />
            <h2 style={{ color: `${checkColor(senti)}` }}>{goal.id}: {goal.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
