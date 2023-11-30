import { academicSemesterCodeMapper } from "./academicSemester.const";
import { TAcademicSemester } from "./academicSemester.inerface";
import { academicSemester } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async (payload: TAcademicSemester)  =>{


    if(academicSemesterCodeMapper[payload.name] !== payload.code){
        throw new Error('invalid semester code');
    }

    const result = await academicSemester.create(payload);
    return result;

}


const getAllAcademicSemestersFromDB = async () => {
    const result = await academicSemester.find();
    return result;
  };
  
  const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await academicSemester.findById(id);
    return result;
  };
  
  const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,
  ) => {
    if (
      payload.name &&
      payload.code &&
      academicSemesterCodeMapper[payload.name] !== payload.code
    ) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await academicSemester.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };
  
export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB


}