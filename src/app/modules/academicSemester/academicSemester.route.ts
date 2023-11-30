
import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemesterValidation';

const router = express.Router();
router.post('/create-academic-semester',validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,AcademicSemesterController.createAcademicSemester);
router.get(
    '/:semesterId',
    AcademicSemesterController.getSingleAcademicSemester,
  );
  
  router.patch(
    '/:semesterId',
    validateRequest(
      AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterController.updateAcademicSemester,
  );
  
  router.get('/', AcademicSemesterController.getAllAcademicSemesters);
export const AcademicSemesterRoutes = router;
