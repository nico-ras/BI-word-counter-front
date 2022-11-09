const fetchData = async (url, method = "GET", content = {}) => {
  if (method == "GET") {
    const resp = await fetch(url);

    const { response } = await resp.json();

    return response;
  } else {
    const resp = await fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });

    const { response } = await resp.json();

    return response;
  }
};

module.exports = { fetchData };
