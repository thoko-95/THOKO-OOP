
fetch ('./data.json')
    .then(resp => resp.json())
    .then(data =>{
        const dataList = document.getElementById('data-list');

        //Let's get our items and create a list for a data source
        data.forEach(item => {
            const itemList = document.createElement('li');
            itemList.innerHTML = `<strong>Name : </strong> ${item.name}
            <br>strong>Email:</strong> ${item.email}`
            //console.log(itemList)
            //console.log(data);
            dataList.appendChild(itemList);
            var  results = JSON.stringify(data);
            var list = data.toLowerCase();
            var list = 

            console.log(list);
            
        });
    })
    .catch(error =>{
        console.error('Error loading data from data source' , error);
    })