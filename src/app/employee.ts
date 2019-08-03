export interface IEmployee{
  id:number,
  name:string,
  employee_age:number,
  zipcode:number,
  email:string,
  city:string,
  company: {
      name:string,
    }
}