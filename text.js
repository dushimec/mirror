

const camerafeed = document.getElementById("videoFeed");

navigator.mediaDevices.getUserMedia({video:true})
.then(stream =>{
    camerafeed.srcObject = stream
})
.catch((error) =>{
    console.log("Accessing camera error ", error);
    
})