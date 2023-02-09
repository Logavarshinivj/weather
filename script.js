let search_btn=document.getElementById('search-btn');
let countryInp=document.getElementById('country-input')

search_btn.addEventListener("click", ()=>{
    let countryName=countryInp.value
    let url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true"`
    console.log(url)
    fetch(url).then((response)=>response.json())
    .then((data)=>{
        console.log(data[0])
        console.log(data[0].name.common)
        console.log(data[0].capital)
        console.log(data[0].region)
        console.log(data[0].flags.svg)
        console.log(data[0].cca2)

        document.querySelector(".space").innerHTML=
        `

    <div class="container">

    <div class="card" style="width: 18rem;">
    <h5>${data[0].name.common}</h5>
    <img src='${data[0].flags.svg}'class="card-img-top" alt=""  width="0px">
    <div class="card-body">
    <ul>
      <li>Capital:${data[0].capital}</li>
      <li>Region:${data[0].region}</li>
      <li>Country code:${data[0].cca2}</li>
    </ul>
    <div class="col-md-12 text-center">  <a href="#" class="btn btn-outline-secondary">Click for weather</a>
    </div>
    </div>
    </div>
        `
        // var wbtn=document.getElementsByClassName('col-md-12 text-center')
        // wbtn.addEventListener('click',()=>{
                let url3=`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=b00d91dd797f99b1f4aafe8fb5eac2f9`
                console.log(url3)
                fetch(url3).then((res)=>res.json())
                .then((final)=>{
                  console.log(final)
                  console.log(Object.keys(final.weather[0]))
                  var a=Object.values(final.weather)
                  console.log(JSON.stringify(a))
                 
                 var b=Object.values(final.main)
                 console.log(b[0])
        
                 
                })

      //  })
       
        
    
      
        
        
    
    //     document.querySelector(".space").innerHTML=
    //     `

    // <div class="container">

    // <div class="card" style="width: 18rem;">
    // <h5>${data[0].name.common}</h5>
    // <img src='${data[0].flags.svg}'class="card-img-top" alt=""  width="0px">
    // <div class="card-body">
    // <ul>
    //   <li>Capital:${data[0].capital}</li>
    //   <li>Region:${data[0].region}</li>
    //   <li>Country code:${data[0].cca2}</li>
    // </ul>
    // <div class="col-md-12 text-center">  <a href="#" class="btn btn-outline-secondary">Click for weather</a>
    // </div>
    // </div>
    // </div>
    //     `
    })
    
  })


 
// let all="https://restcountries.com/v3.1/all"
//     console.log(all)
//     fetch(all).then((res) =>res.json())
//     .then((final)=>{
//       for(var i=0; i<final.length; i++)
//       {
//         var latlo=final[i].latlng
//         console.log(final[i].name.common)
//         console.log("latitude: ",latlo[0])
//         console.log("longitude: ",latlo[1])
        
//       }
      

//     })


