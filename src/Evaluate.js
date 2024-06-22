import { useState } from "react";

const Evaluate = () => {
  const [title, setTitle] = useState('');
  const [pro, setPro] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/progress/' + title)
      .then(response => response.json())
      .then(data => setPro(data.message));
    // const { error, isPending, data: goals } = useFetch('/progress/' + title)
    // setPro(goals);

    // fetch('/goals/' + title, {
    //   method: 'progress',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(goal)
    // }).then(() => {
    //   console.log('new goal added');
    // })
  }

  return (
    <div className="create">
      <h2>What goal do you want to evaluate?</h2>
      <form onSubmit={handleSubmit}>
        <label>Goal number:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Get evaluation</button>
      </form>
      {pro && <p>The progress is: {pro}</p>}

    </div>
  );
}

export default Evaluate;