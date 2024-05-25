import { Request, Response } from "express";
import { studentServices } from "./student.services";
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStucentInfoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromBd();
    res.status(200).json({
      success: true,
      message: "Student are retived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentsFromBd(studentId);
    res.status(200).json({
      success: true,
      message: " Student Single Data was Successfully ",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
