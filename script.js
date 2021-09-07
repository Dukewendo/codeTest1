let url = "https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  //Loop through JSON and display needed elements

  for (var i = 0; (len = data.data.length); i++) {
    let newDiv = document.createElement("div");    // create the div
    newDiv.id = data.data[i].name;                 // give the div a name
                                                  // display details
                                                  // set the image 

    var img = new Image();
    img.src = data.data[i].screenshot_url;


    document.body.appendChild(newDiv);
  }
}

getData();
