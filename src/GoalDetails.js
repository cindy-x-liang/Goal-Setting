import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


// const ProgressBar = ({ progress, onChange }) => {
//   const handleMouseMove = (e) => {
//     const { left, width } = e.currentTarget.getBoundingClientRect();
//     const newProgress = ((e.clientX - left) / width) * 100;
//     onChange(newProgress);
//   };

//   const handleMouseDown = () => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   const handleMouseUp = () => {
//     document.removeEventListener('mousemove', handleMouseMove);
//     document.removeEventListener('mouseup', handleMouseUp);
//   };

//   return (
//     <div
//       className="progress-bar-container"
//       onMouseDown={handleMouseDown}
//     >
//       <div className="progress-bar" style={{ width: `${progress}%` }}>
//         {Math.round(progress)}%
//       </div>
//     </div>
//   );
// };

const GoalDetails = () => {
  const [pro, setPro] = useState('');
  const history = useHistory();


  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const progressToChange = { progress };

    fetch('/goals/' + id, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progressToChange)
    }).then(() => {
      console.log('new goal added');
      history.push('/');

    })
  }
  const { data: goal, error, isPending } = useFetch('/goals/' + id);

  const [progress, setProgress] = useState(0);


  // const handleProgressChange = (newProgress) => {
  //   setProgress(Math.min(Math.max(newProgress, 0), 100));
  // };

  return (
    <div className="goal-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {goal && (
        <article>
          <h2>{goal.title}</h2>
          <p>Goal Description: {goal.description}</p>
          <div>{goal.category}</div>
          <div>Goal Progress: {goal.progress}</div>
          <form onSubmit={handleSubmit}>
            <label>Update Progress:</label>
            <input
              required
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            ></input>
            <button>Add Progress</button>
          </form>


          {/* <div>
            <h2>Interactive Sliding Progress Bar</h2>
            <ProgressBar progress={progress} onChange={handleProgressChange} />
          </div> */}


        </article>

      )}
    </div>
  );
}

export default GoalDetails;