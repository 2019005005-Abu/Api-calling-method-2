//Api calling in Javascript
//=>Api Calling in  Fetch method
//4 ways to call api-XMLHttpRequest,fetch,axios,jquery

//fetch() has replaced XMLhttpRequest
//fetch()-global method for asking Http Request
//2 ways to call -then,async,await

//+ fetch() is easy to use compare to XMLHttpRequest
//+fetch () returns a promise
//- returned promise can only network error
//-does not support all the older browser
console.clear();
console.log(window);
fetch('https://jsonplaceholder.typicode.com/posts',{
 method:'POST',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
    title:"foo",
    body:"bar",
    userId:1,
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})


//Update Data
fetch('https://jsonplaceholder.typicode.com/posts/1',{
 method:'PUT',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
    title:"Software",
    body:"Rifat",
    userId:2,
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})

//patch
fetch('https://jsonplaceholder.typicode.com/posts/1',{
 method:'PATCH',
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 body:JSON.stringify({
   title:"I am a Full stack web appliaction Developer",
 })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})

//delete

fetch('https://jsonplaceholder.typicode.com/posts/2',{
 method:'DELETE',
//  headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//  body:JSON.stringify({
//    title:"I am a Full stack web appliaction Developer",
//  })
})

.then((response)=>{
    if(!response.ok){
        const mgs=`Error :${response.status}`;
        throw new Error(mgs);
    }else{
        return response.json();
    }
})

.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err);
})

//aswait and async function
//get data
const makeRequest=async (url)=>{
    var res=await fetch(url);
    if(!res.ok){
        const msg=`Error:${res.status}`;
        throw new Error(msg);
    }
    const data=await res.json();
    return data;
}
const getData=()=>{
     makeRequest('https://jsonplaceholder.typicode.com/posts/2').
     then((res)=>{
        console.log(res);
     }).catch((e)=>{
     console.log(e);
     })
}
getData();
//send Data
const makeRequest1=async (url,confi)=>{
    var res=await fetch(url,confi);
    if(!res.ok){
        const msg=`Error:${res.status}`;
        throw new Error(msg);
    }
    const data=await res.json();
    return data;
}
const sendData=()=>{
      makeRequest1('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
     .then((res)=>{
        console.log(res);
     }).catch((e)=>{
     console.log(e);
     })
}


//update data
const makeRequest2=async (url,confi)=>{
    var res=await fetch(url,confi);
    if(!res.ok){
        const msg=`Error:${res.status}`;
        throw new Error(msg);
    }
    const data=await res.json();
    return data;
}
const UpdateData=()=>{
      makeRequest2('https://jsonplaceholder.typicode.com/posts', {
        method: 'PATCH',
        body: JSON.stringify({
          profession:"Web Application developer",
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
     .then((res)=>{
      console.log(res);
     }).catch((e)=>{
        console.log(e);
     })

}
UpdateData();

//Delete Data

const makeRequest3=async (url,confi)=>{
    var res=await fetch(url,confi);
    if(!res.ok){
        const msg=`Error:${res.status}`;
        throw new Error(msg);
    }
    const data=await res.json();
    return data;
}
const DeleteData=()=>{
      makeRequest3('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',})
     .then((res)=>{
      console.log(res);
     }).catch((e)=>{
        console.log(e);
     })

}
DeleteData();
