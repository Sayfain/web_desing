async function getData(datLink) {
  try {
    const fetchData = await fetch(datLink);
    const data = await fetchData.json();
    return data;
  } catch (error) {
    console.log(Error(error));
  }
}

export { getData };
