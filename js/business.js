const requestURL = 'json/business.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        
        const business = jsonObject['business'];
        business.forEach((business) => {
        let row = document.createElement('div');
        row.classList.add("row");
        let column = document.createElement('div');
        column.classList.add("column");
        let bizname = document.createElement('h2');
        let bizdesc = document.createElement('p');
        bizdesc.classList.add("businessdesc");
        let bizphone = document.createElement('p');
        let bizsite = document.createElement('p');
        let imagesrc = business.imageurl;
        let image = document.createElement('img');

        bizname.innerHTML = `${business.name}`;
        bizdesc.innerHTML = `${business.description}`;
        bizphone.innerHTML = `${business.phone}`;
        bizsite.innerHTML = `${business.website}`;
        image.setAttribute('src', imagesrc);


        row.appendChild(column);
        column.appendChild(bizname);
        column.appendChild(image);
        column.appendChild(bizdesc);
        column.appendChild(bizphone);
        column.appendChild(bizsite);
        

        document.querySelector('div.bizdirect').appendChild(row);

        });

        

    });