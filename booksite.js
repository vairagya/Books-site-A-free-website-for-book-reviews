const http=require('http');
const fs= require('fs');
const filecontent=fs.readFilesync('home.html');
const server=http.createserver((req,res)=>{
    res.writehead(200,{'content-type':"text/html"});
    res.end(filecontent)
})
