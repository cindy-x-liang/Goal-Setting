import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = { title, description, startDate, endDate };

    fetch('/goals', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal)
    }).then(() => {
      console.log('new goal added');
      history.push('/');
    })

  }

  return (
    <div className="create">
      <h2>add a new goal</h2>
      <form onSubmit={handleSubmit}>
        <label>goal title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>goal description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>goal start date:</label>
        <input
          type="date"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
        <label>goal end date:</label>
        <input
          type="date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
        <button>add goal</button>
      </form>
    </div>
  );
}

export default Create;