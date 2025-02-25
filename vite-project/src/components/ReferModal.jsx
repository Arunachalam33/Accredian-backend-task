import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { useState } from "react";

const ReferModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // Close modal after submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <TextField label="Your Name" name="referrerName" required onChange={handleChange} />
          <TextField label="Your Email" name="referrerEmail" required type="email" onChange={handleChange} />
          <TextField label="Friend's Name" name="refereeName" required onChange={handleChange} />
          <TextField label="Friend's Email" name="refereeEmail" required type="email" onChange={handleChange} />
          <TextField label="Message" name="message" multiline rows={3} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReferModal;
