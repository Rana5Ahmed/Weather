// Instructions 
// Personal API Key for OpenWeatherMap API
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
/* Function to GET Web API Data*/
/* Function to POST data */
/* Function to GET Project Data */



// Personal API Key for OpenWeatherMap API >>>DONE 
const apiKey = "&APPID=45a4f23e0f329bcabfaf1090196a29ae&units=imperial";
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const date = new Date()
const acurratDate= date.getMonth()+1+'.'+ date.getDate()+'.'+ date.getFullYear();
// For Errors  // standered arrwo function 
function catchError(error){console.log("Error!!!!",error)};

// Clicking and get data
//Event listener to add function to existing HTML DOM element>>DONE
/* Function called by event listener >>DONE*/
document.getElementById("generate").addEventListener("click",generate)
function generate(){
const zipCode= document.getElementById("zip").value;
const textArea= document.getElementById("feelings").value
  catchZipcode(zipCode,apiKey,baseURL).then( function(Info){
    console.log(Info);
    postData("http://localhost8080/add",{date:acurratDate,temp:Info.main.temp ,content:textArea})
    retrieveData();
});
}

// Get data  async function
/* Function to GET Web API Data>> DONE*/
async function catchZipcode(zipCode,apiKey,baseURL){
  // return await 
   const res=await fetch(baseURL+zipCode+apiKey)
  try{
    const Info = await res.json();
    return Info;
 }catch(error){
catchError
 }  }

// Posting data async function
/* Function to POST data>> DONE */
 async function postData (url="http://localhost:8080/add", Info={}){
  console.log(Info)
      const response = await fetch(url="http://localhost:8080/add", {
    // standared syntax
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify({date:Info.date, 
      temp: Info.temp, 
      content: Info.content})
    });
    try{
      const newData = await response.json();
      return newData;
  }catch(error){
   catchError
  }
  }
  

    const retrieveData = async () =>{ 
      const request = await fetch("http://localhost:8080/all");
      try {
        const allInfo = await request.json();
      // Write updated data to DOM elements
      document.getElementById('date').innerHTML = (allInfo.date) ;
      document.getElementById('content').innerHTML = allInfo.content;
      document.getElementById("temp").innerHTML =allInfo.temp +" "+'Fihranhit degrees';
      
    }  
    catch(error) {
        catchError
        // appropriately handle the error
      }
   
     }








