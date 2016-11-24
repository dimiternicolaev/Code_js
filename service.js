@inject( HttpClient)
export class Service {
  constructor( http) {


    this.http = http;

    
  }
	getData(){
	// http is undefined
	this.http.fewtch() 
	}
  }