import React, { useEffect, useState } from "react";

export default function PromiseDemo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [flag,setFlag] = useState(false)
  const message = "Completion of SDP Project";
  const makePromise = () => {
    //promise is an object
    // resolve , reject are two callback , either u can use any name for this
    return new Promise((resolve, reject) => { // u can also use all whatever a,b or also
        setFlag(true)
      if (flag) {
        resolve(message);
      } else
      {
        reject("I failed to complete SDP Project");
      }
    });
  };
  useEffect(() => {
    makePromise()
      .then((result) => { // cna keep any word to store the return value here.
        setData(result);
      })
      .catch((err) => {
        setError(err);
      });
  });
  return (
    <div>
      <h3>PromiseDemo</h3>
      {data != null ? (
        <p>{data}</p>
      ) : error != null ? (
        <p>{error}</p>
      ) : (
        <p>NOTHING</p>
      )}
    </div>
  );
}