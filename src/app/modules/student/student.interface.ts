export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccuapation: string;
  fatherContactNo: string;
  matherName: string;
  matherOccuapation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
// create a interface
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contuctNo: string;
  EmergencyContuctNo: string;
  bloudGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  parmanenetAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: "active" | "blocked";
};
