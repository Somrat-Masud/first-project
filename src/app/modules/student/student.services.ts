import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStucentInfoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getStudentsFromBd = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromBd = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStucentInfoDB,
  getStudentsFromBd,
  getSingleStudentsFromBd,
};
