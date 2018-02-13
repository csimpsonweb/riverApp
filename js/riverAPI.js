var goyt = new XMLHttpRequest();
goyt.open("GET", "http://environment.data.gov.uk/flood-monitoring/id/stations/692348.json", false);
goyt.send();
var response = JSON.parse(goyt.response);
var goytResult = response.items.measures.latestReading.value;
var goytResult = goytResult.toFixed(1);
//console.log(response.items.measures.latestReading.value);
console.log(goytResult);
$( "#goyt" ).replaceWith(goytResult);

var etherow = new XMLHttpRequest();
etherow.open("GET", "http://environment.data.gov.uk/flood-monitoring/id/stations/692190.json", false);
etherow.send();
var response = JSON.parse(etherow.response);
var etherowResult = response.items.measures.latestReading.value;
//var etherowResult = 0;
var etherowResult = etherowResult.toFixed(1);
console.log(response.items.measures.latestReading.value);
$( "#etherow" ).replaceWith(etherowResult);

// ========================= etherow 0 - Goyt ++ ==================================

if(etherowResult == 0 && goytResult == 0 ){
 console.log("MCC 0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 0</h2>" );
}

if(etherowResult == 0 && goytResult == 0.1){
 console.log("MCC 0.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 0.6</h2>" );
}

if(etherowResult == 0 && goytResult == 0.2){
 console.log("MCC 0.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 0.9</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.3){
 console.log("MCC 1.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.7</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.4){
 console.log("MCC 2.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 2.6</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.5){
 console.log("MCC 3.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 3.5</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.6){
 console.log("MCC 4.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 4.4</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.7){
 console.log("MCC 5.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 5.3</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.8){
 console.log("MCC 6.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.1</h2>" );
} 

if(etherowResult == 0 && goytResult == 0.9){
 console.log("MCC 7.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 7.0</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.0){
 console.log("MCC 7.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 7.9</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.1){
 console.log("MCC 8.8");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 8.8</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.2){
 console.log("MCC 9.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 9.7</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.3){
 console.log("MCC 10.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 10.5</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.4){
 console.log("MCC 11.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 11.4</h2>" );
} 

if(etherowResult == 0 && goytResult == 1.5){
 console.log("MCC 12.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 12.3</h2>" );
} 


// ========================= etherow 0.1 - Goyt ++ ==================================

if(etherowResult == 0.1 && goytResult == 0){
 console.log("MCC 0.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 0.6 </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.2 </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.5 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 2.3 </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 3.2 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 4.1 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 5.0 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 5.9 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.7 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 7.6 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 8.5 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 9.4 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 10.3 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 11.1 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 12.0 </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 12.9 </h2>" );
} 


// ========================= etherow 0.2 - Goyt ++ ==================================

if(etherowResult == 0.2 && goytResult == 0){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 0.8 </h2>" );
}

if(etherowResult == 0.2 && goytResult == 0.1){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.4 </h2>" );
}

if(etherowResult == 0.2 && goytResult == 0.2){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.6 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.3){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 2.5 </h2>" );
} 

if(etherowResult == 0.2& goytResult == 0.4){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 3.4 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.5){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 4.3 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.6){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 5.1 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.7){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.0 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.8){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.9 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 0.9){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 7.8 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.0){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 8.7 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.1){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 9.5 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.2){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 10.4 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.3){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 11.3 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.4){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 12.2 </h2>" );
} 

if(etherowResult == 0.2 && goytResult == 1.5){
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 13.1 </h2>" );
} 


// ========================= etherow 0.3 - Goyt ++ ==================================

if(etherowResult == 0.3 && goytResult == 0){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 1.6 </h2>" );
}

if(etherowResult == 0.3 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 2.2 </h2>" );
}

if(etherowResult == 0.3 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 2.5 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 3.4 </h2>" );
} 

if(etherowResult == 0.3& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 4.3 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 5.1</h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.0 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 6.9 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 7.8 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 8.7 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 9.5 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 10.4 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 11.3 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 12.2 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 13.1 </h2>" );
} 

if(etherowResult == 0.3 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = 13.9 </h2>" );
}

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}*/ 

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}*/ 

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}*/ 

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */

/*// ========================= etherow 0.3 - Goyt ++ ==================================


if(etherowResult == 0.1 && goytResult == 0.1){
 console.log("MCC 1.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
}

if(etherowResult == 0.1 && goytResult == 0.2){
 console.log("MCC 1.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.3){
 console.log("MCC 2.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1& goytResult == 0.4){
 console.log("MCC 3.2");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.5){
 console.log("MCC 4.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.6){
 console.log("MCC 5.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.7){
 console.log("MCC 5.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.8){
 console.log("MCC 6.7");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 0.9){
 console.log("MCC 7.6");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.0){
 console.log("MCC 8.5");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.1){
 console.log("MCC 9.4");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.2){
 console.log("MCC 10.3");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.3){
 console.log("MCC 11.1");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.4){
 console.log("MCC 12.0");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} 

if(etherowResult == 0.1 && goytResult == 1.5){
 console.log("MCC 12.9");
 $( "#mcc" ).replaceWith( "<h2 class='clubsite-result'>MCC Club Site Level = * </h2>" );
} */