import React from "react";
import Button from "@material-ui/core/Button";

export default function CreateProduct() {
  const [image, setImage] = React.useState(null);

  const handleFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={handleFile} />
      </Button>
      <img src={image} />
    </div>
  );
}
