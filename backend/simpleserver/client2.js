windows.onload=function(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all?fields=name,capital,flags")
    xhr.send()
    xhr.onload=function(){
        console.log(typeof xhr.responseText)
        
    }
}
console.log(typeof xhr.responseText)