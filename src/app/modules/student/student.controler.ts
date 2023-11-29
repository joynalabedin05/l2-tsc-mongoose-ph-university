
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';



const getAllStudents = catchAsync(async (req, res) => {
 
    const result = await StudentServices.getAllStudentFromDB();
   
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student are retrieved successfully',
      data: result,
    });
})

const getSingleStudent = catchAsync(async (req, res) => {
  
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single student are retrieved successfully',
    data: result,
  });

});
 
const deleteStudent = catchAsync(async (req, res) => {
  
  const { studentId } = req.params;
  const result = await StudentServices.deleteSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  });

});
 
export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
