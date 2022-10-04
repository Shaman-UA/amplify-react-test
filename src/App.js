import './App.css';

import React, { useState } from "react";
import FileUploader from "./FileUploader";

const App = () => {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState();

    const submitForm = () => {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("file", selectedFile);

        console.log(formData);

        // axios
        //     .post("http://54.173.190.81/api/file-upload", formData)
        //     .then((res) => {
        //         alert("File Upload success");
        //     })
        //     .catch((err) => alert("File Upload Error"));
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
            <button onClick={submitForm}>Submit</button>
        </form>
      </div>
  );
};


export default App;
