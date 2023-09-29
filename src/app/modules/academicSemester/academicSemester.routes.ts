import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getByIdFromDB);
router.post('/', AcademicSemesterController.insertIntoDb);

export const AcademicSemesterRoute = router;
