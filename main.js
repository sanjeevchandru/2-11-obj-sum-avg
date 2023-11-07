document.write("to create object  find calculate total and average"+"<br>");
document.write("----------------------------------------------------"+"<br>");
let obj={
    mark1:78,
    mark2:89,
    mark3:84,
    mark4:90,
    mark5:80,
    total(){
        let x=obj.mark1+obj.mark2+obj.mark3+obj.mark4+obj.mark5;
        return x;
    }
};
document.write("Mark1 :"+obj.mark1+"<br>"+"Mark2 :"+obj.mark2+"<br>"+"Mark3 :"+obj.mark3+"<br>"+"Mark4 :"+obj.mark4+"<br>"+"Mark5 :"+obj.mark5+"<br>");
let y=obj.total();
document.write("The total marks : "+y+"<br>");
document.write("Average of :"+y/5);
