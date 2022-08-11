async function loadXMLDoc() {
	// var xhttp = new XMLHttpRequest();
	var Data = '';
    var arr = [`id1`,`id2`,`id3`,`id4`,`id5`,`id6`,`id7`,`id8`,`id9`,`id10`];
    var i = 0;
	// while(i < 5){ xhttp.onreadystatechange = await function() {
	//   if (this.readyState == 4 && this.status == 200) {
	// 	data = JSON.parse(this.responseText);
	// 	console.log(data);
	// 	console.log(data[0]);
	// 	var html = "<p>";
	// 	  html += '<br/>';
    //     //   const [name,username,email,phone] = data[0];
    //       console.log(i);
    //       if(data !=''){
    //       html += `Name : ${data[i]['name']}`;
	// 	  html += '<br/>';
    //       html += `Phone : ${data[i]['phone']}`;
    //       html += '<br/>';
    //       html += `Email : ${data[i]['email']}`;
    //       html += '<br/>';
    //       html += `Username : ${data[i]['username']}`;
    //       html+="</p>";
    //       console.log(arr[i]);
    //       document.getElementById("id1").innerHTML = html;

    //       console.log(html);
    //       }}
		//   for( var j in data[0] ) {
		//   	html +=  `${j}`;
		//   }
		//   html += "</br>";
		//   for( var i = 0; i < data.length; i++) {
		// 	  html += '</br>';
		// 	  for( var j in data[i] ) {
		// 		  console.log((j));
		// 		  if(j==="address"){html += '</br>' + data[i][j].city + '</br>';}
		// 		  else if(j==="company"){html += '</br>' + data[i][j].name + '</br>';}
		// 		  else{
		// 			  html += ' ' + data[i][j] + 						'</br>';
		// 			  }
		// 	  }
		// 	  html += '</br>';
		//   }
		//   html += '</table>;

        // console.log(html);

while(i<=arr.length){
        await axios.get("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09").then(
            (data)=>
                {
                    Data = data.data;
                    console.log(Data);
                    console.log(Data[0]);
                    var html = "<h5>";
                    //   html += '<br/>';
                    //   const [name,username,email,phone] = data[0];
                      console.log(i);
                      if(Data !=''){
                      html += `${Data[i]['name']}</h5>`;
                      html += '<br/> <p>';
                      html += `Phone : ${Data[i]['phone']}`;
                      html += '<br/>';
                      html += `Email : ${Data[i]['email']}`;
                      html += '<br/>';
                      html += `Username : ${Data[i]['username']}`;
                      html+="</p>";
                      console.log(arr[i]);
                      document.getElementById(arr[i]).innerHTML = html;
            
                      console.log(html);
                      }
                    }
            
        ).catch(function (error) {
            // handle error
            console.log(error);
          })
        // console.log(html);
        i++;
	   }
       
	  
	};
// 	const api = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
// 	xhttp.open("GET", api, true);
// 	xhttp.send();
//   }