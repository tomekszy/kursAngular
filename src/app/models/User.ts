interface User {
    firstName:string,
    lastName:string,
    age?:number,
    address?:{
      street:string,
      city:string,
      state:string
    }
    isActive?: boolean,
    isSuccess?:boolean,
    registered?:Date,
    hide?:boolean
  }
  