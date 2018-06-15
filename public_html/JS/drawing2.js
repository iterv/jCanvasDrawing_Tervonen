$(function() {
    var paint=false;
    var pointsX=new Array();
    var pointsY=new Array();
    var obj=null;   

    $("canvas").mousemove(function(event) {
        if (paint) {
            var x = event.pageX - this.offsetLeft;
            var y = event.pageY - this.offsetTop;

            $("#coordinates").text(x + ","+ y);
            
            pointsX.push(x);
            pointsY.push(y);
            
            for (var p=0; p<pointsX.length; p+=1) {
                obj ['x'+p] = pointsX[p];
                obj ['y'+p] = pointsY[p];
            }
            
            $("canvas").drawLine(obj);
        }
    });

    
    $("canvas").mousedown(function(event) {
        obj=null;
        obj = {
            strokeStyle: color,
            strokeWidth: width,
            closed: false,
            layer: true
        };
        
        for (var i=pointsX.length; i>=0; i--){
            pointsX.pop();
            pointsY.pop();
        }
        
        var x = event.PageX - this.offsetLeft;
        var y = event.PageY - this.offsetTop;
        pointsX.push(x);
        pointsY.push(y);
        
        paint=true;
    });
    
    $("canvas").mouseup(function() {
        paint=false;
    });
    
    $(".color").click(function() {
        color = $(this).css("background-color");
        $(".color").css("opacity","0.5");
        $(this).css("opacity","1.0");
    });
    
    $(".width").change(function() {
        $("select option:selected").each(function(){
            width = $(this);
        });
    });
            
   
});