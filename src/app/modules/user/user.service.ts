// import { object } from "joi";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.inerface";
import { Student } from "../student/student.model";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";


const createStudentIntoDB = async (password: string, studentData : TStudent) => {
    const userData: Partial<TUser> = {};

    userData.password = password || config.default_pass as string;

    userData.role = 'student';

  const generatedStudentID = (payload:TAcademicSemester )=>{

  }

    userData.id = '203010001';

    const newUser = await User.create(userData);
    if(Object.keys(studentData).length){
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = await Student.create(studentData);
        return newStudent;
    }
    
  };

  export const UserServices = {
    createStudentIntoDB,
  }
  