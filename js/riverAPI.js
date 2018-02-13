var goyt = new XMLHttpRequest();
goyt.open("GET", "http://environment.data.gov.uk/flood-monitoring/id/stations/692348.json", false);
goyt.send();
var response = JSON.parse(goyt.response);
var goytResult = response.items.measures.latestReading.value;
//var goytResult = 0.211;
var goytResult = goytResult.toFixed(1);
//console.log(response.items.measures.latestReading.value);
console.log(goytResult);


var etherow = new XMLHttpRequest();
etherow.open("GET", "http://environment.data.gov.uk/flood-monitoring/id/stations/692190.json", false);
etherow.send();
var response = JSON.parse(etherow.response);
//var etherowResult = response.items.measures.latestReading.value;
var etherowResult = 0;
console.log(response.items.measures.latestReading.value);


// ========================= etherow 0 - Goyt ++ ==================================

if(etherowResult == 0 && goytResult == 0 ){
 console.log("MCC 0");
}

if(etherowResult == 0 && goytResult == 0.1){
 console.log("MCC 0.6");
}

if(etherowResult == 0 && goytResult == 0.2){
 console.log("MCC 0.9");
} 

if(etherowResult == 0 && goytResult == 0.3){
 console.log("MCC 1.7");
} 

if(etherowResult == 0 && goytResult == 0.4){
 console.log("MCC 2.6");
} 

if(etherowResult == 0 && goytResult == 0.5){
 console.log("MCC 3.5");
} 

if(etherowResult == 0 && goytResult == 0.6){
 console.log("MCC 4.4");
} 

if(etherowResult == 0 && goytResult == 0.7){
 console.log("MCC 5.3");
} 

if(etherowResult == 0 && goytResult == 0.8){
 console.log("MCC 6.1");
} 

if(etherowResult == 0 && goytResult == 0.9){
 console.log("MCC 7.0");
} 

if(etherowResult == 0 && goytResult == 1.0){
 console.log("MCC 7.9");
} 

if(etherowResult == 0 && goytResult == 1.1){
 console.log("MCC 8.8");
} 

if(etherowResult == 0 && goytResult == 1.2){
 console.log("MCC 9.7");
} 

if(etherowResult == 0 && goytResult == 1.3){
 console.log("MCC 10.5");
} 

if(etherowResult == 0 && goytResult == 1.4){
 console.log("MCC 11.4");
} 

if(etherowResult == 0 && goytResult == 1.5){
 console.log("MCC 12.3");
} 


// ===========================================================

// ========================= etherow 0.1 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
} 


// ===========================================================

// ========================= etherow 0.1 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
} 


// ===========================================================