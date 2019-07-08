function getRates(currency, startDate, endDate) {
    var dataArr = [];
    var i = startDate;
    while (i <= endDate) {
        var BASE_URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${i}&json`;
        
        // AJAX Request using Fetch API and Promises
        fetch(BASE_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var itemObj = [];
            itemObj[data[0].exchangedate] = data[0].rate;
            dataArr.push(itemObj);
        });
        i++;
    }
    return dataArr;
}

btnGo.addEventListener("click", () => {
    const startDate = Number(first_date.value.split("-").join(""));
    const endDate = Number(last_date.value.split("-").join(""));
    console.info(getRates(currency.value, startDate, endDate));
    create_chart();

}, false);


function create_chart (){
$.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
    function (data) {
  
      Highcharts.chart('container', {
        chart: {
          zoomType: 'x'
        },
        title: {
          text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
          text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Exchange rate'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
  
        series: [{
          type: 'area',
          name: 'USD to EUR',
          data: [[23423434554234,123],[24423436554234,434],[25423437554234,1231]]
        }]
      });
    }
  );
}
