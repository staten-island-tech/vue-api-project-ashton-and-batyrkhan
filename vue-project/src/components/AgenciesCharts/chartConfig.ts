import { useData } from "@/stores/store"

console.log("useData", useData)

export const data = {
    labels: [
      "ADMIN FOR CHILDREN'S SERVICES",
      "DEPARTMENT FOR THE AGING",
      "DEPARTMENT OF CORRECTION",
      "DEPARTMENT OF ENVIRONMENTAL PROTECT.",
      "DEPARTMENT OF FINANCE",
      "DEPARTMENT OF HEALTH AND MENTAL HYGIENE",
      "DEPARTMENT OF HOMELESS SERVICES",
      "DEPARTMENT OF PARKS AND RECREATION",
      "DEPARTMENT OF SANITATION",
      "DEPARTMENT OF SMALL BUSINESS SERVICES",
      "DEPARTMENT OF SOCIAL SERVICES",
      "DEPARTMENT OF TRANSPORTATION",
      "DEPARTMENT OF YOUTH & COMMUNITY DEV",
      "HOUSING PRESERVATION AND DEVELOPMENT",
      "POLICE DEPARTMENT",
    ],
    datasets: [
      {
        label: "Plan Amount",
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        backgroundColor: 'rgba(100, 100, 255,0.2)',
        data: [23710736, 4117261, 9595473, 13304374, 2764325, 19895972, 30798639, 3473551, 15440256, 2354828, 93818499, 6436943, 10048079, 12951494, 48674123, ],
      },
      {
        label: "Actual Amount",
        borderColor: 'rgba(100,155,100,1)',
        pointBackgroundColor: 'rgba(100,155,100,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(100,155,100,1)',
        backgroundColor: 'rgba(100, 255, 100,0.2)',
        data: [15996542, 2635110, 7946912, 8639067, 1846741, 13784747, 17464073, 2384053, 12860543, 2184579, 63799889, 4306277, 5743545, 7102499, 35242657]
      },
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  