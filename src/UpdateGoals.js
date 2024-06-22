import { useState } from "react";

const UpdateGoals = ({ goals }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = { title, category, description, startDate, endDate };

    fetch('/goals/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal)
    }).then(() => {
      console.log('new goal added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>Goal title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Goal category:</label>
        <textarea
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></textarea>
        <label>Goal Description:</label>
        <textarea
          required
          value={category}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Goal Start Date:</label>
        <textarea
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></textarea>
        <label>Goal End date:</label>
        <textarea
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></textarea>
        <button>Add Goal</button>
      </form>



    </div>


  );
}

export default UpdateGoals;