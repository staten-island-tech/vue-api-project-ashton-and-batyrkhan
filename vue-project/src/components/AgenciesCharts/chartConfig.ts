import { useData } from "@/stores/store"

console.log("useData", useData)
const colorsChart = [
  [255, 0, 0],     // Red
  [0, 255, 0],     // Green
  [0, 0, 255],     // Blue
  [255, 255, 0],   // Yellow
  [255, 0, 255],   // Magenta
  [0, 255, 255],   // Cyan
  [128, 0, 0],     // Maroon
  [0, 128, 0],     // Green (Darker)
  [0, 0, 128],     // Navy
  [128, 128, 0],   // Olive
  [128, 0, 128],   // Purple
  [0, 128, 128],   // Teal
  [64, 64, 64],    // Gray
  [192, 192, 192], // Silver
  [255, 128, 0]    // Orange
];
const lighterColors = [
  [255, 128, 128], // Lighter Red
  [128, 255, 128], // Lighter Green
  [128, 128, 255], // Lighter Blue
  [255, 255, 128], // Lighter Yellow
  [255, 128, 255], // Lighter Magenta
  [128, 255, 255], // Lighter Cyan
  [255, 128, 128], // Lighter Maroon
  [128, 192, 128], // Lighter Green (Darker)
  [128, 128, 192], // Lighter Navy
  [192, 192, 128], // Lighter Olive
  [192, 128, 192], // Lighter Purple
  [128, 192, 192], // Lighter Teal
  [128, 128, 128], // Lighter Gray
  [224, 224, 224], // Lighter Silver
  [255, 192, 128]  // Lighter Orange
];

const rgbToRgba = (rgb) => `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;

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
        borderColor: 'rgba(0,0,0,100)', //outer ring border color
        pointBackgroundColor: rgbToRgba(colorsChart[0]),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgbToRgba(colorsChart[0]),
        backgroundColor: [rgbToRgba(colorsChart[0]), rgbToRgba(colorsChart[1]),rgbToRgba(colorsChart[2]),rgbToRgba(colorsChart[3]),rgbToRgba(colorsChart[4]),rgbToRgba(colorsChart[5]),rgbToRgba(colorsChart[6]),rgbToRgba(colorsChart[7]),rgbToRgba(colorsChart[8]),rgbToRgba(colorsChart[9]),rgbToRgba(colorsChart[10]),rgbToRgba(colorsChart[11]),rgbToRgba(colorsChart[12]),rgbToRgba(colorsChart[13]),rgbToRgba(colorsChart[14])],
        data: [36079798667, 4428670989, 17091462574, 17216670727, 3645797820, 20291922213, 24498221229, 6544697856, 20817064369, 3395269140, 119890461936, 12173966497, 9639619800, 13875976273, 68824056143, ],
      },
      {
        label: "Actual Amount",
        borderColor: 'rgba(0,0,0,100)', //inner ring border color + color around the labels
        pointBackgroundColor: rgbToRgba(lighterColors[0]),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgbToRgba(lighterColors[0]),
        backgroundColor: [rgbToRgba(lighterColors[0]), rgbToRgba(lighterColors[1]),rgbToRgba(lighterColors[2]),rgbToRgba(lighterColors[3]),rgbToRgba(lighterColors[4]),rgbToRgba(lighterColors[5]),rgbToRgba(lighterColors[6]),rgbToRgba(lighterColors[7]),rgbToRgba(lighterColors[8]),rgbToRgba(lighterColors[9]),rgbToRgba(lighterColors[10]),rgbToRgba(lighterColors[11]),rgbToRgba(lighterColors[12]),rgbToRgba(lighterColors[13]),rgbToRgba(lighterColors[14])],
        data: [26164454155, 2790807856, 11579615029, 11825171825, 2345701415, 13796027592, 13293674576, 4541152145, 13829318319, 2461799839, 86685352914, 8310340508, 5938565344, 7836827350, 48471400312]
      },
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  