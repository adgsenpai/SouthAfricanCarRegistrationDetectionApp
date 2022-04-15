import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RegCodes, CarData } from './CarData.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';

const input = ReactDOM.createRoot(document.getElementById('Input'));
const output = ReactDOM.createRoot(document.getElementById('output'));


class SearchButton extends React.Component {

  render() {
    const handleClick = () => {
      const Input = document.getElementById('InputBox').value;
      if (CarData[Input] == undefined) {

      }
      else {

        output.render(
          <React.StrictMode>
            <App />
            <div>
              <Skeleton width={200} height={200} />
            </div>
            <p>
              <Skeleton count={3} />
            </p>

          </React.StrictMode>
        );
        window.scrollTo(0, document.body.scrollHeight);
        const payload = {
          "city": CarData[Input]
        };
        axios.post(`/api/v1/getData`, payload
        )
          .then(res => {
            output.render(
              <React.StrictMode>
                <img src={res.data['imageURL']}></img>
                <br></br>
                <p>{res.data['generalInfo']}</p>
              </React.StrictMode>
            );

          })
      }
    }
    return (
      <div>
        <br>
        </br>
        <button className="btn bg-gradient-primary" onClick={handleClick} type="submit">Search Number Plate Code</button>
      </div>
    )
  }
}


class RegInput extends React.Component {
  render() {
    return (
      <input id="InputBox" list="RegCodes" className="form-control" type="text" />
    );
  }
}

input.render(
  <React.StrictMode>
    <div>
      <RegInput></RegInput>
    </div>
    <div>
      <SearchButton></SearchButton>
    </div>

    <RegCodes></RegCodes>
  </React.StrictMode>
);



