import { useData } from "@/stores/store"

console.log("useData", useData)

export const data = {
    labels: [
      'nyc transit',
      'nyc public restrooms',
      'nyc garbage collection',
      'nyc public schools',
      'nyc public libraries',
      
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
        data: [40, 20, 12, 39, 5]
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
        data: [50, 30, 22, 49, 15]
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
        data: [20, 10, 2, 29, 1]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  