function Upload() {
        //Reference the FileUpload element.
        var fileUpload = document.getElementById("fileUpload");
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
  function ProcessExcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        
        var yname= document.getElementById('ynam').value;
        var xname = document.getElementById('xnam').value;
 		var yaxis=[];
 		var xaxis = [];
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            yaxis[i] =  excelRows[i].Y;
 
            xaxis[i] = excelRows[i].X;
        }
        
  
    var prob = document.getElementById('probb').value;
    var yaxissum=0, xaxissum=0, yxaxissum=0, xsquaresum=0, ysquaresum=0, n=yaxis.length;
    for(var i=0;i<yaxis.length;i++){
        yaxissum += parseFloat(yaxis[i]);
        xaxissum += parseFloat(xaxis[i]);
        yxaxissum += (parseFloat(yaxis[i])*parseFloat(xaxis[i]));
        xsquaresum += (parseFloat(xaxis[i])**2);
        ysquaresum += (parseFloat(yaxis[i])**2);
    }
    var ystdev=0, xstdev=0;
    var ymean=yaxissum/n, xmean=xaxissum/n;
    for (var i = 0; i < n; i++) {
        ystdev+=((parseFloat(yaxis[i])-ymean)**2);
        xstdev+=((parseFloat(xaxis[i])-xmean)**2);
    }
    var ystdev2 = Math.sqrt(ystdev/(n-1)),
    xstdev2 = Math.sqrt(xstdev/(n-1));
    var a=(((yaxissum * xsquaresum) - (xaxissum * yxaxissum)) / ((n*(xsquaresum)) - (xaxissum**2)));
    var b=((n*(yxaxissum)) - (xaxissum * yaxissum)) / ((n*(xsquaresum)) - (xaxissum**2));
    var r=((n*yxaxissum)-(yaxissum * xaxissum))/Math.sqrt(((n*xsquaresum)-((xaxissum)**2))*((n*ysquaresum)-((yaxissum)**2)));
    var rsquared=r**2;
    var ssxx =xsquaresum-((xaxissum**2)/n);
    var ssxy = yxaxissum-((xaxissum*yaxissum)/n);
    var ssyy =ysquaresum-((yaxissum**2)/n);
    var sse = ssyy-(b*ssxy);
    var s= Math.sqrt(sse/(n-2));
    var asterr = s*Math.sqrt((1/n)+((xmean**2)/ssxx)),
    bsterr = s/Math.sqrt(ssxx);
    var atstat=a/asterr, btstat=b/bsterr;
    if (n<=30){
        var cv=ttable[prob][n-2];
    }else{
        var cv=confint[prob];
    };
    var al=a-(cv*asterr),au=a+(cv*asterr),bl=b-(cv*bsterr),bu=b+(cv*bsterr);
    var output=yname+" = "+a.toFixed(4) +" + "+b.toFixed(4)+"<sub>"+xname+"</sub></br> correlation coefficient,r: "+r.toFixed(4)+
    "</br>Coefficient of Determination, R<sup>2</sup>: "+rsquared.toFixed(4)+
    "</br>Mean of "+yname+": "+ymean.toFixed(4)+"</br>"+
    "Mean of "+xname+": "+xmean.toFixed(4)+"</br>"+
    "Standard Error :"+s.toFixed(4)+"</br>"+
    "Standard Deviation of "+yname+": "+ystdev2.toFixed(4)+"</br>"+
    "Standard Deviation of "+xname+": "+xstdev2.toFixed(4)+"</br>"+
    "<table><tr><th>ANOVA</th><th><em>df</em></th><th><em>SS</em></th><th><em>MS</em></th><th><em>F</em></th><th>Significance F</th></tr></br>"+
    "<tr><td>Regression</td><td>"+1+"</td><td>"+(ssyy-sse).toFixed(4)+"</td><td>"+((ssyy-sse)/1).toFixed(4)+"</td><td>"+(((ssyy-sse)/1)/(sse/(n-2)).toFixed(4)).toFixed(4)+"</td><td></td></br>"+
    "<tr><td>Residual</td><td>"+(n-2)+"</td><td>"+sse.toFixed(4)+"</td><td>"+(sse/(n-2)).toFixed(4)+"</td><td></td><td></td></br>"+
    "<tr><td>Total</td><td>"+(n-1)+"</td><td>"+ssyy.toFixed(4)+"</td><td></td><td></td><td></td></table></br>"+
    "<table><tr><th>Variable</th><th>Coefficient</th><th>Standard Error</th><th>T Stat</th><th>Lower Limit</th><th>Upper Limit</th></tr></br>"+
    "<tr><td>Intercept</td><td>"+a.toFixed(4)+"</td><td>"+asterr.toFixed(4)+"</td><td>"+atstat.toFixed(4)+"</td><td>"+al.toFixed(4)+"</td><td>"+au.toFixed(4)+"</td></br>"+
    "<tr><td>"+xname+"</td><td>"+b.toFixed(4)+"</td><td>"+bsterr.toFixed(4)+"</td><td>"+btstat.toFixed(4)+"</td><td>"+bl.toFixed(4)+"</td><td>"+bu.toFixed(4)+"</td></table></br>";
    document.getElementById('answer2').innerHTML=output;
    
};


