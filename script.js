
    async function getWeatherdata(){
       
        let data=await fetch("https://restcountries.com/v2/all")
        let res=await data.json()
        console.log(res)

        console.log(res[0].name)                        
        var countryName = res[0].name
        console.log(countryName)

        let weatherData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=41007815a25cc8e0197769e5266679bc`)
        let weatherres=await weatherData.json()
        console.log(weatherres)
      
         const button1=document.getElementById('button1')
         button1.addEventListener('click',()=>{
           
             var div1 = document.getElementById('div1')
                    div1.innerHTML=`<p class="card-text">Humidity:${weatherres.main.humidity}</p>
                                    <p class="card-text">Temperature:${weatherres.main.temp}</p>
                                    <p class="card-text">Pressure:${weatherres.main.pressure}</p>
                                    <p class="card-text">Visibility:${weatherres.visibility}</p>                                                                
                                    <button class="btn border-white text-white" onclick="div1.style.display='none'">Close</button>`
                                    
                    div1.style.display="block"               
                                    
         })      
         
         
         
      
         var countryName1 = res[1].name
         console.log(countryName1)

         let weatherData1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName1}&appid=41007815a25cc8e0197769e5266679bc`)
         let weatherres1=await weatherData1.json()
         console.log(weatherres1)
       
          const button2=document.getElementById('button2')
          button2.addEventListener('click',()=>{
            
              var div2 = document.getElementById('div2')
                     div2.innerHTML=`<p class="card-text">Humidity:${weatherres1.main.humidity}</p>
                                     <p class="card-text">Temperature:${weatherres1.main.temp}</p>
                                     <p class="card-text">Pressure:${weatherres1.main.pressure}</p>
                                     <p class="card-text">Visibility:${weatherres1.visibility}</p>                                                                
                                     <button class="btn border-white text-white" onclick="div2.style.display='none'">Close</button>`
                                     
                     div2.style.display="block"               
                                     
          })             
       
         
         var countryName2 = res[2].name
         console.log(countryName2)

         let weatherData2=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName2}&appid=41007815a25cc8e0197769e5266679bc`)
         let weatherres2=await weatherData2.json()
         console.log(weatherres2)
       
          const button3=document.getElementById('button3')
          button3.addEventListener('click',()=>{
            
              var div3 = document.getElementById('div3')
                     div3.innerHTML=`<p class="card-text">Humidity:${weatherres2.main.humidity}</p>
                                     <p class="card-text">Temperature:${weatherres2.main.temp}</p>
                                     <p class="card-text">Pressure:${weatherres2.main.pressure}</p>
                                     <p class="card-text">Visibility:${weatherres2.visibility}</p>                                                                
                                     <button class="btn border-white text-white" onclick="div3.style.display='none'">Close</button>`
                                     
                     div3.style.display="block"               
                                     
          })                                                                                                      
         }
         








