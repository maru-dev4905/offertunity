
var options ={
  	animation : true,
    animationEasing : "easeOutSine",
    percentageInnerCutout: 60,
    segmentShowStroke : false
}
 var  data = [
	{
		value: 25,
		color:"#fff",
	},
  {
		value: 75,
		color:"#9A84F7",
	}
  ];
  
var dayObject = new Chart($("#stateChart").get(0).getContext("2d")).Doughnut(data,options);
//dayObject;