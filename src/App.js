import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import FileUploader from "./FileUploader";

const App = () => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
      <div className="App">
        <form>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <FileUploader
                onFileSelectSuccess={(file) => setSelectedFile(file)}
                onFileSelectError={({ error }) => alert(error)}
            />

        </form>
      </div>
  );
};

export default App;
