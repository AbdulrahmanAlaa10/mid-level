import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">What Do You to learn?</InputLabel>
        <Select  
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <a href="https://www.youtube.com/playlist?list=PLZAZrdw4Gi-EIE0RoxI41Go5b1uSifVpN" target="_blank"><MenuItem value={10}>HTML</MenuItem></a>
          <a href="https://www.youtube.com/playlist?list=PLZAZrdw4Gi-G-3kcrkazXX5tN47YqWQWH" target="_blank"><MenuItem value={20}>HTML5</MenuItem></a>
          <a href="https://www.youtube.com/playlist?list=PLZAZrdw4Gi-G-3kcrkazXX5tN47YqWQWH" target="_blank"><MenuItem value={30}>CSS</MenuItem></a>
          <a href="https://www.youtube.com/playlist?list=PLuJnCvt4zm3aX_8CfuPCReNPw3ekoDnZ1" target="_blank"><MenuItem value={40}>CSS3</MenuItem></a>
          <a href="https://www.youtube.com/watch?v=7HsAYjmGghk&list=PLuJnCvt4zm3aX_8CfuPCReNPw3ekoDnZ1&index=21" target="_blank"><MenuItem value={50}>BootStrap4</MenuItem></a>
          <a href="https://www.youtube.com/playlist?list=PLZAZrdw4Gi-EgsT234YQU5rdufCOpQUnL" target="_blank"><MenuItem value={60}>JavaScript</MenuItem></a>

        </Select>
      </FormControl>
      </div>

    )
  }
    