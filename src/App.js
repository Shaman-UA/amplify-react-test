import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

const App = () => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
      <div className="App">
        <form>
            <input
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />

        </form>
      </div>
  );
};

export default App;
