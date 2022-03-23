export class RequestInfo
{
  public id : number;
  public statusCode : number;
  public responseBodyLength : number;
  public size : string;
  public timeTaken : number;
  public responseBody : string;
  /**
   *
   */
  constructor(private _id : number,private _statusCode : number, private _responseBodyLength : number, private _size : string, private _timeTaken : number, private _responseBody : string) {
    this.id = _id;
    this.statusCode = _statusCode;
    this.responseBodyLength = _responseBodyLength;
    this.size = _size;
    this.timeTaken = _timeTaken;
    this.responseBody = _responseBody;
  }
}


