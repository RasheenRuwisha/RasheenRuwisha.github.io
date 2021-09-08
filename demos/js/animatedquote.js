axios.get("https://quotes.rest/qod.json", {
    headers: {
      Accept: "application/xml"
    }
  })
  .then(response => {
    // Do work here
    console.log(response.data.contents.quotes[0]);
    let quote = response.data.contents.quotes[0];
    let output ='';
        output += `

          <h1>${quote.title}</h1>
          <p>${quote.quote}</p>
          <cite>-${quote.author}-</cite>
       
        `
    $('#quotes').html(output)
  })
  .catch(e => {
    console.log("error", e);
  });
