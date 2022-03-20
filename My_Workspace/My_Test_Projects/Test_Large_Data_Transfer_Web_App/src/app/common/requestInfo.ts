export class RequestInfo
{
  public id : number;
  public responseBodyLength : number;
  public size : string;
  public timeTaken : number;
  public responseBody : string;
  /**
   *
   */
  constructor(public _id : number,public _responseBodyLength : number, public _size : string, public _timeTaken : number, public _responseBody : string) {
    this.id = _id;
    this.responseBodyLength = _responseBodyLength;
    this.size = _size;
    this.timeTaken = _timeTaken;
    this.responseBody = _responseBody;
  }
}


