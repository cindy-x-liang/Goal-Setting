const LogList = ({ logs, deletetodo }) => {




  return (
    <div className="logs-list" >
      {logs.map(log => (
        <div className="log-preview" key={log.id} >
          {log.date}: {log.message}
          <button onClick={() => deletetodo(log.id)}  >-</button>

        </div>
      ))}
    </div>
  );
}

export default LogList;
