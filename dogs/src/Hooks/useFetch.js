import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async function (url, options) {
    let resp;
    let json;
    try {
      setError(null);
      setLoading(true);
      resp = await fetch(url, options);
      json = await resp.json();
      if (resp.ok === false) throw new Error(json.message);
      setData(json);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { resp, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
