const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors=require('cors')
app.use(bodyParser.json())
app.use(cors())


app.get('/android', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/android', (req, res) => {
  

  // const amount = JSON.stringify(req.body);
  // const trx = req.body.trx_id;
console.log("AMOUNT RECEIVED: "+ JSON.stringify(req.body));
  // Do something with the data (e.g., store it in a database)

  // ...

  // Send a response back to the client
  res.send('Data received successfully' );

})



app.get('/addtologin', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/addtologin', (req, res) => {
  
  const n=req.body.data.user
  const p=req.body.data.passw
  
  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  var sql="INSERT INTO login (username,pass) VALUES ('"+n+"' ,'"+p+"'"+")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log(result[1].name);
  })
});

// SQL ENDS

  
  res.send("USER ADDED");


});



                                      // CHECK CREDENTIALS


app.get('/checkcredentials', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/checkcredentials', (req, res) => {
  
  const n=req.body.data1.username
  const p=req.body.data1.password
  
  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  var sql="SELECT * FROM login WHERE username= '"+n+"' AND pass='"+p+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result.length>0)
    {
      res.send('1');
    }
    else
    {
      res.send('0');
   
    }
    // console.log(result[1].name);
  })
});
})


app.get('/card', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/card', (req, res) => {
  
  // const n=req.body.data1.username
  // const p=req.body.data1.password
  
  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  var sql="SELECT name,username,height,age,education,work,profilepicurl FROM details;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result.length>0)
    {
      // console.log('server:'+result);
      res.json(result);
      
    }
    else
    {
      res.send('0');
   
    }
    // console.log(result[1].name);
  })
});
})

// SQL ENDS

app.get('/displayprof', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/displayprof', (req, res) => {
  
  const ur=req.body.data3.username
  // console.log("DASDA  "+ur);
  // const p=req.body.data1.password
  
  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  var sql="SELECT * FROM details WHERE username='"+ur+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result.length>0)
    {
      console.log('TAHI:'+result[result.length-1].description);
      const jsx={
...result[0]
      }
      res.json(result);
      
    }
    else
    {
      res.send('0');
   
    }
    // console.log(result[1].name);
  })
});
})








  //                                      ADDING OTHER DETAILS ON SIGN UP

                                  


app.get('/adddetails', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/adddetails', (req, res) => {
  
  const n1=req.body.data2.username
  const n2=req.body.data2.name
  const n3=req.body.data2.age
  const n4=req.body.data2.gender
  const n5=req.body.data2.interests
  const n6=req.body.data2.phoneno
  const n7=req.body.data2.country
  const n8=req.body.data2.maritalstat
  const n9=req.body.data2.work
  const n10=req.body.data2.prefage
  const n11=req.body.data2.city
  const n12=req.body.data2.religion
  const n13=req.body.data2.caste
  const n14=req.body.data2.height
  const n15=req.body.data2.description
  const n16=req.body.data2.hobbies
  const n17=req.body.data2.email
  const n18=req.body.data2.education
  const n19=req.body.data2.nickname
  const n20=req.body.data2.profilepicurl
  
  

  



  // console.log("DATA RECEIVED "+ req.body.data2);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies,email,education,nickname,profilepicurl) VALUES ("+ "'"+n1+"',"+  "'"+n2+"',"+   "'"+n3+"',"+   "'"+n4+"',"+   "'"+n5+"',"+   "'"+n6+"'," + "'"+n7+"',"  + "'"+n8+"',"  + "'"+n9+"',"  + "'"+n10+"',"  + "'"+n11+"',"  + "'"+n12+"',"  + "'"+n13+"',"  + "'"+n14+"',"  + "'"+n15+"',"  + "'"+n16+"',"+ "'"+n17+"',"+ "'"+n18+"'," + "'"+n19+"','"+n20+"'"  +")";
  // var sql="SELECT * FROM login WHERE username= '"+n+"' AND pass='"+p+"'";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
res.send(err)
    }
    else{
      res.send("Data Details Added")
    }
    
    // console.log(result[1].name);
  })
});

// SQL ENDS
});







                                  // SEND ALL DETAILS

                                  


app.get('/sendall', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/sendall', (req, res) => {
  

  // console.log("DATA RECEIVED "+ req.body.data2);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ("+ "'"+n1+"',"+  "'"+n2+"',"+   "'"+n3+"',"+   "'"+n4+"',"+   "'"+n5+"',"+   "'"+n6+"'," + "'"+n7+"',"  + "'"+n8+"',"  + "'"+n9+"',"  + "'"+n10+"',"  + "'"+n11+"',"  + "'"+n12+"',"  + "'"+n13+"',"  + "'"+n14+"',"  + "'"+n15+"',"  + "'"+n16+"'"   +")";
  var sql="SELECT * FROM details";
  con.query(sql, function (err, result) {
    if (err) {
      console.log("ERROR"+err);
      
res.send(err)
    }
    else{
      
      // console.log("my"+result[result.length-1]);
res.send(result)
      // res.send("DATA SENT SUCESSFULLY")
    }
    
    // console.log(result[1].name);
  })
});

// SQL ENDS
});




app.get('/verifytrans', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/verifytrans', (req, res) => {
  
   const n=req.body.data1.id
   const user=req.body.data1.username
   
  


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  
  

  var sql2="SELECT username FROM login WHERE username='"+user+"';";
  
  con.query(sql2, function (err, result) {
  if(result.length>0)
  {
   
  
    var sql="SELECT amount FROM transactions WHERE trxid='"+n+"';";
  
    con.query(sql, function (err, result) {
      if (err) throw err;
     
      if(result.length>0 )
      {
        const am=result[0].amount
        console.log(am);
        if(result[0].amount>99)
        {
         
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
  
          today = mm + '/' + dd + '/' + yyyy;
  
          var sql1="INSERT into billing (username,billAmount,billDate) VALUES ('"+user+"','"+ am  +"' ,'"+today+"');";
          con.query(sql1, function (err, result) {})
          // console.log("PLAN ACTIVATED ID MATCHED");
          var sql5="UPDATE details SET elite='"+1+"' WHERE username='"+user+"');";
          con.query(sql5, function (err, result) {})
          
          res.send('1');
        }
  
        
        
      }
      else
      {
        res.send('0');
     
      }
      // console.log(result[1].name);
    })
  





  }
  else{
    res.send('00')
  }

  })
  




  
});
})


app.get('/checkbill', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/checkbill', (req, res) => {
  

   const user=req.body.checkdata.username
   
  


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "matromonial"
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
  var sql="SELECT * FROM billing WHERE username='"+user+"';";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result.length>0)
    {
     
        res.send('1');
      }

      
      
    
    else
    {
      res.send('0');
   
    }
    // console.log(result[1].name);
  })
});
})





                                  




app.listen(3000, () => {
  console.log('Server started on port 3000');
});