//Assign variables for html elements
let container=document.querySelector(".quote");
let generate=document.querySelector(".generate");
//assign variables for fetching api
const api_key='I1cssHjVqeAgIAXlAhyC/Q==RW0b6odvsZ6OFhm1';
const api='https://api.api-ninjas.com/v1/quotes';
const options={
    method:"GET",
    headers:{
        'X-Api-Key':api_key,
    }
};
//adding functions to button generate
generate.addEventListener("click",()=>{
    container.innerHTML='<p>loading..</p>';
    quoteGenerator();
});
//asynchronous function for generating quotes
async function quoteGenerator() {
    const response=await fetch(api,options);
    let Quote=await response.json();
    let heading=Quote[0].category;
    let str=`<div>
             <h2>${heading.toUpperCase()}</h2>
             <p>${Quote[0].quote}</p>
             <h4>-${Quote[0].author}</h4>
             </div>`
    container.innerHTML=str;
}
//functio for copying quote
