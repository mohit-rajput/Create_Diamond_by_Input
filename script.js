function diamond(){
    var pyramidInput = document.getElementById("pyramid").value;
    //var pyramidInput = 5;
    for(var i = 1; i <= pyramidInput; i++ )
        {
            for( var j = 1; j <= (pyramidInput - i); j++)
                {
                    document.write("&nbsp;");
                }
            for( var k = 1; k <= i; k++)
                {
                    document.write(k);
                }
            document.write("<br/>");
        }
    for(var i = (pyramidInput - 1); i >= 1; i-- )
        {
            for( var j = 1; j <= (pyramidInput - i); j++)
                {
                    document.write("&nbsp;");
                }
            for( var k = 1; k <= i; k++)
                {
                    document.write(k);
                }
            document.write("<br/>");
        }
}

function findThePyramid(){
    document.getElementById("output1").innerHTML = diamond();
}