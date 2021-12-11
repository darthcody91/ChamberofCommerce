
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=55fabb0529e11ab638f2e68f25e2cb38&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then(data => {
 
  
  const noon = data.list.filter(x => x.dt_txt.includes('12:00:00'));
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  const d = new Date(data.list[0].dt * 1000);
  let weekday = d.getDay(); //this is where the days from the json goes --- figure out how to loop the date//
    console.log(days[weekday])
  let counter = 0;

    noon.forEach(x => {
    let card = document.createElement('section') 
    let day = document.createElement('h3');
    let temp = document.createElement('h3');
    let desc = document.createElement('p');
    let imagesrc = "https://openweathermap.org/img/wn/" + x.weather[0].icon + '.png';
    let image = document.createElement('img');

    day.innerHTML = `${days[weekday]}`.toUpperCase();
    temp.innerHTML = `${x.main.temp} °F`;
    desc.innerHTML = `${x.weather[0].description}`.toUpperCase(); 
    image.setAttribute('src', imagesrc);


    
    if (weekday <5) {
      weekday += 1;
    }
    else {
      weekday = 0;
    }

    counter += 1;

    card.appendChild(day);
    card.appendChild(temp);
    card.appendChild(image);
    card.appendChild(desc)
   
   

    document.querySelector('div.cards').appendChild(card);
  });

       
});