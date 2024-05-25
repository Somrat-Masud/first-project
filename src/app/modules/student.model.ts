import { model, Schema } from "mongoose";
import {
  UserName,
  Guardian,
  LocalGuardian,
  Student,
} from "./student/student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccuapation: { type: String },
  fatherContactNo: { type: String },
  matherName: { type: String },
  matherOccuapation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});
//create a schema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contuctNo: { type: String, required: true },
  EmergencyContuctNo: { type: String, required: true },
  bloudGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  parmanenetAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "blocked"],
});

//create a model

export const StudentModel = model<Student>("Student", studentSchema);
