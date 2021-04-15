import React from 'react';
import './index.css';
import {TextField, FormControl, Button} from '@material-ui/core';
import toRoman from '../../helpers/toRomans';
import fromRoman from '../../helpers/fromRomans';

function Home() {
  const [number, setNumber] = React.useState('');
  const [result, setResult] = React.useState('-');

  let calculateNumber = () => {
    if (Number.parseInt(number)) {
      setResult(toRoman(number));
    } else {
      setResult(fromRoman(number));
    }
  };

  return (
      <div className="landing">
        <div className="search-box">
          <h4>In the following field, you can enter both a number and a Roman
            numeral
            and convert the number to Roman numeral, and vice versa.
          </h4>
          {/* --- TODO: create component for searchbox --- */}
          <FormControl>
            <TextField
                label="Enter Number"
                variant="outlined"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Button
                variant="outlined"
                color="primary"
                className="ml-10"
                onClick={calculateNumber}
            >
              Calculate
            </Button>
          </FormControl>
        </div>
        <div className="resultBox">
          <h4>Result: {result}</h4>
        </div>
      </div>
  );
}

export default Home;