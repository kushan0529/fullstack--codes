            window.onload=function(){ 
                const counthandle=document.querySelector('#count')
                const listhandle=document.querySelector('#list')
                listhandle.innerHTML=""
                    
                const xhr=new XMLHttpRequest();
                xhr.open("GET","http://localhost:3050/employees")
                xhr.send();
                xhr.onload=function(){
                    const data=JSON.parse(xhr.responseText)
                    console.log(data);
                    counthandle.textContent=data.length
                    data.forEach((ele) => {
                        console.log(ele.name)
                        const listtag=document.createElement("li")
                        listtag.textContent=ele.name
                        listhandle.appendChild(listtag)
                    });
                    
                }
            }