// Dark/Light Button
const themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('dark-btn');
})

//TypeWriter
let i = 0;
const txt = `Lyra re-invent eCommerce by utilizing DeFi and Web 3.0 technology. As a result, you can trade anything with your favorite cryptocurrency while keeping maximum safety.`;
const speed = 20;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


//Tokenomics Chart
am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.innerRadius = am4core.percent(40);

chart.data = [
  {
    "allocation": "Team",
    "LYR": 3100000000
  },
  {
    "allocation": "Development",
    "LYR": 1000000000
  },
  {
    "allocation": "Marketing & Partnership",
    "LYR": 1000000000
  },
  {
    "allocation": "Reserve",
    "LYR": 1000000000
  },
  {
    "allocation": "DEX Liquidity",
    "LYR": 1515000000
  },
  {
    "allocation": "Staking Rewards",
    "LYR": 2385000000
  }
];

// chart.legend = new am4charts.Legend();
// chart.legend.position = "bottom";
// chart.legend.valueLabels.template.align = "right"
// chart.legend.valueLabels.template.textAlign = "end"
// chart.legend.valueLabels.template.color="#fff"

var pieSeries = chart.series.push(new am4charts.PieSeries3D());
pieSeries.dataFields.value = "LYR";
pieSeries.dataFields.category = "allocation";
pieSeries.slices.template.stroke = am4core.color("#F0B90B");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;

chart.responsive.enabled = true;


