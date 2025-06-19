export interface Cordinates {
    latitude : number,
    longitude : number
}

export interface HourlyWeatherData {
  time: string;         
  temp_c: number;      
  humidity: number;   
  feelslike_c: number;  
}