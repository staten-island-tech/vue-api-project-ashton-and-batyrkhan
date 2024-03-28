

export const data = {
    labels: [
      'nyc transit',
      'nyc public restrooms',
      'nyc garbage collection',
      'nyc public schools',
      
    ],
    datasets: [
      {
        label: 'funding',
        //backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        backgroundColor: 'rgba(100, 100, 255,0.2)',
        data: [40, 20, 12, 39]
      },
      {
        label: 'spending',
        //backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(100,155,100,1)',
        pointBackgroundColor: 'rgba(100,155,100,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(100,155,100,1)',
        backgroundColor: 'rgba(100, 255, 100,0.2)',
        data: [50, 30, 22, 49]
      },
      {
        label: 'headcount',
        //backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255, 100, 100,0.2)',
        data: [20, 10, 2, 29]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  