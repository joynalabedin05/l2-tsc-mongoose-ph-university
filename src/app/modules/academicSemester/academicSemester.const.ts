import { TAcademicSemesterCode, TAcademicSemesterCodeMapper, TAcademicSemesterName, TMonths } from "./academicSemester.inerface";


export const Months: TMonths[] = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

  export const AcademicSemesterName: TAcademicSemesterName[] = ['Autum', 'Summer', 'Fall'];
  export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

  export const academicSemesterCodeMapper : TAcademicSemesterCodeMapper = {
    Autum: '01',
    Summer: '02',
    Fall: '03',
}