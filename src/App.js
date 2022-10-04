import './App.css';

import React, { useState } from "react";
import FileUploader from "./FileUploader";

const App = () => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState();

    const submitForm = async (e) => {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("file", selectedFile);

        e.preventDefault();
        try {
            let res = await fetch("http://54.173.190.81/api/file-upload", {
                method: "POST",
                body: formData,
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setDescription("");
            } else {
                alert("File Upload Error");
            }
        } catch (err) {
            console.log(err);
        }
    };

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
            <button type="button" onClick={submitForm}>Submit</button>
        </form>
      </div>
  );
};


export default App;
