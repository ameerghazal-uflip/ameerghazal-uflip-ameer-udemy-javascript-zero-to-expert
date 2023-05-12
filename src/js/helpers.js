import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// ADD Feature edit this.
export const AJAX = async function (
  url,
  uploadData = undefined,
  method = 'POST'
) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST', // will either be post default or delete
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : method == 'DELETE' // edited with ADD FEATURE 5
      ? fetch(url, {
          method: 'DELETE',
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    if (!res.ok) {
      const data = await res.json();
      throw new Error(`${data.message} (${res.status})`);
    }

    if (res.status == 204) return { success: true }; // not sure what this does, got it from cole.

    const data = await res.json(); // move this around for delete call.
    return data; // result value of this promise
  } catch (err) {
    throw err; // rethrows the error so the promise that is returned from get json rejects and we can catch it in the higher.
  }
};

/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // result value of this promise
  } catch (err) {
    throw err; // rethrows the error so the promise that is returned from get json rejects and we can catch it in the higher.
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // result value of this promise
  } catch (err) {
    throw err; // rethrows the error so the promise that is returned from get json rejects and we can catch it in the higher.
  }
};
*/
