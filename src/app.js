/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFileEverySecond = () => {
  const date = new Date();
  const timestamp = date.getTime().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  fs.writeFile(`app-${hours}_${minutes}_${seconds}`, timestamp, (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(
      `${timestamp}, app-${hours}_${minutes}_${seconds} file was created`
    );
  });
};

setInterval(createFileEverySecond, 1000);
