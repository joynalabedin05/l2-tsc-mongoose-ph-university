
import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();
router.post('/create-academic-semester', AcademicSemesterController.createAcademicSemester);
// router.get('/', StudentController.getAllStudents);
// router.get('/:studentId', StudentController.getSingleStudent);
// router.delete('/:studentId', StudentController.deleteStudent);

export const AcademicSemesterRoutes = router;
