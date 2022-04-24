export function fetchCount(amount: number) {
  return new Promise<{data: number}>(resolve =>
    setTimeout(() => resolve({data: amount}), 500),
  );
}

//https://api2.binance.com/api/v3/ticker/24hr

// import axios from 'axios';

// export function fetchCount() {
//   return new Promise<{data: number}>((resolve, reject) =>
//     axios
//       .get('https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/')
//       .then(function (response) {
//         console.debug('response', response);
//         resolve(response.data);
//       })
//       .catch(function (error) {
//         console.debug('error', error);
//         reject(error);
//       })
//       .then(function () {
//         // always executed
//       }),
//   );
// }

//https://api2.binance.com/api/v3/ticker/24hr
