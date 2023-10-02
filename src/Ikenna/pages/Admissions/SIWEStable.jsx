import React from "react";

const TuitionTable = () => {
  const data = [
    { faculty: "Faculty of Computing and Applied Sciences", duration: "16 Weeks (4 Months)" },
    { faculty: "Faculty of Management and Social Sciences", duration: "16 Weeks (4 Months)" },
    { faculty: "Faculty of Engineering (SIWES I)", duration: "12 Weeks (3 Months)" },
    { faculty: "Faculty of Engineering (SIWES II)", duration: "24 Weeks (6 Months)" },
    { faculty: "Faculty of Environmental Studies", duration: "24 Weeks (6 Months)" },
    { faculty: "Faculty of Basic Medical Sciences", duration: "24 Weeks (6 Months)" },
  ];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Faculty Duration Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Faculty</th>
            <th style={thStyle}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="ikenna-acc-p">{item.faculty}</td>
              <td className="ikenna-acc-p">{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TuitionTable;
