import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const ShopDialog = ({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) => {
  const { name, address, phone, email } = data;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">
        {"_id" ? "Update user" : "Create new user"}
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            id="name"
            value={name}
            onChange={(e) => onChange(e)}
            placeholder="Enter name"
            label="Name"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="address"
            value={address}
            onChange={(e) => onChange(e)}
            placeholder="Enter address"
            label="Address"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            placeholder="Enter phone"
            label="Phone"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Enter Mail"
            label="Email"
            variant="outlined"
            margin="dense"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => handleFormSubmit()}
          variant="contained"
        >
          {"_id" ? "Update" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShopDialog;
