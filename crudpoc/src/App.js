import React, { isValidElement, useEffect } from "react";
import {
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import "./App.scss";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

function App() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerState(true);
  };
  const CloseToggleDrawer = () => {
    setDrawerState(false);
  };

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [name, setName] = React.useState("");
  const [state, setState] = React.useState("");
  const [plant, setPlant] = React.useState("");
  const [machine, setMachine] = React.useState("");
  const [labour, setLabour] = React.useState("");
  const [rat, setRate] = React.useState("");
  const [total, setTotal] = React.useState(0);

  const [members, setMembers] = React.useState([
    {
      id: 1,
      labour: "g Laber",
      machine: "mno",
      name: "amit",
      plant: "XYZ Plant",
      rat: 100,
      state: "UP",
    },
  ]);
  const collectData = () => {
    console.warn(name, state, age, plant, machine, labour, rat);
    let item = {
      id: members.length + 1,
      name,
      state,
      plant,
      machine,
      labour,
      rat,
    };

    members.push(item);
    setMembers(members);
    setTotal(members.length);
    console.warn("members", members);
  };
  // useEffect(() => {
  //   console.warn("members net", members);
  // }, [members])
  function remove(val) {
    let item = members.filter(function (obj) {
      return obj.id !== val;
    });

    setMembers(item);
    setTotal(members.length);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h4>Add Labour</h4>
        <div>
          <span>Employed</span>
          <FormControlLabel control={<Switch color="primary" />} />
          <span>Contractual</span>
        </div>

        <div className="form vendor_form">
          <h4 className="label">Vendor: </h4>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Vendor (Labour) Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setName(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"amit"}>Amit</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setState(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"UP"}>UP</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Plant
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setPlant(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"XYZ Plant"}>XYZ plant</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="form vendor_form">
          <h4 className="label">Rate Per Person: </h4>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Machine Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setMachine(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"machine 1"}>Machine</MenuItem>
            </Select>
          </FormControl>
          <IconButton color="primary" onClick={toggleDrawer}>
            <AddIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerState} onClose={CloseToggleDrawer}>
            <div className="drawer_content">
              <h4>
                Add Machine Type{" "}
                <IconButton onClick={CloseToggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </h4>
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Machine Type
                </InputLabel>
                <TextField
                  required
                  id="standard-required"
                  placeholder="Enter"
                />
              </FormControl>
            </div>
            <div className="drawe_action">
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloseIcon />}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DoneIcon />}
              >
                Save{" "}
              </Button>
            </div>
          </Drawer>

          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Labour Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setLabour(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"abc"}>Abc</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Rate Per Person/Annum (INR)
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              // value={age}
              onChange={(e) => {
                setRate(e.target.value);
              }}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={collectData}
            startIcon={<AddIcon />}
          >
            {" "}
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={collectData}
            // startIcon={<AddIcon />}
          >
            {" "}
            Update
          </Button>
        </div>
      </div>
      <h1>Members {members.length}</h1>
      <table border="1">
        <tr>
          <td>S. N.</td>
          <td>Name</td>
          <td>State</td>
          <td>Plant</td>
          <td>Machine</td>
          <td>Labour</td>
          <td>Rate</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        {members.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.state}</td>
            <td>{item.plant}</td>
            <td>{item.machine}</td>
            <td>{item.labour}</td>
            <td>{item.rate}</td>
            <td>
              <IconButton>
                <EditIcon />
              </IconButton>
            </td>
            <td>
              <IconButton
                onClick={() => {
                  remove(item.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
