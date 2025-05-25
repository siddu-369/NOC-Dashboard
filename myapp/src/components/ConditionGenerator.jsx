import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConditionGenerator = () => {
  const [serverNames, setServerNames] = useState("");
  const [conditions, setConditions] = useState("");

  const baseConditions = [
    'hostname = "{server}"',
    'host = "{server}"',
    'node = "{server}"',
    'alertTrapNodeId = "{server}"',
    'oraEMNGEventHostName = "{server}"',
    'oraEM4AlertHostName = "{server}"',
    'dfmHostFullName = "{server}"',
    'monitorTargetHost = "{server}"',
    'application = "{server}"',
    'alert_source = "{server}"',
    'node_name = "{server}"',
  ];

  const generateConditions = () => {
    const serverList = serverNames.split(",").map((name) => name.trim());
    const allConditions = serverList.map((server) => {
      return baseConditions
        .map((condition) => condition.replace("{server}", server))
        .join(" OR ");
    });
    setConditions(allConditions.join(" OR "));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(conditions);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Condition Generator</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter server names (comma-separated)"
            value={serverNames}
            onChange={(e) => setServerNames(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mb-3" onClick={generateConditions}>
          Generate Conditions
        </button>
        {conditions && (
          <div className="mt-3">
            <textarea
              className="form-control"
              rows="5"
              readOnly
              value={conditions}
            ></textarea>
            <button className="btn btn-success mt-2" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionGenerator;
