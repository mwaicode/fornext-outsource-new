// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// // === CLIENTS ===
// export const registerClient = async (clientData: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   country: string;
//   password: string;
// }) => {
//   const response = await axios.post(`${API_URL}/clients/register`, clientData);
//   return response.data;
// };

// // === TALENTS ===
// // Step 1: Account creation
// export const registerTalentAccount = async (talentData: {
//   fullName: string;
//   email: string;
//   password: string;
// }) => {
//   const response = await axios.post(`${API_URL}/talents/register`, talentData);
//   return response.data;
// };

// // Step 2: Experience and Project
// export const updateTalentProfile = async (talentId: string, data: {
//   role: string;
//   experience: number;
//   project: string;
// }) => {
//   const response = await axios.put(`${API_URL}/talents/${talentId}/profile`, data);
//   return response.data;
// };

// // Step 3: CV Upload
// export const uploadTalentCV = async (talentId: string, file: File) => {
//   const formData = new FormData();
//   formData.append('cv', file);

//   const response = await axios.post(`${API_URL}/talents/${talentId}/upload-cv`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return response.data;
// };
// // === LOGIN ===
// export const loginClient = async (data: {
//   email: string;
//   password: string;
// }) => {
//   const response = await axios.post(`${API_URL}/auth/login`, data);
//   return response.data;
// };




import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// === CLIENTS ===
export const registerClient = async (clientData: {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/clients/register`, clientData);
  return response.data;
};

// === TALENTS ===
// Full Registration (one-step)
export const registerTalent = async (formData: {
  fullName: string;
  email: string;
  password: string;
  role: string;
  experience: number;
  project: string;
  cv: File;
}) => {
  const data = new FormData();
  data.append('fullName', formData.fullName);
  data.append('email', formData.email);
  data.append('password', formData.password);
  data.append('role', formData.role);
  data.append('experience', formData.experience.toString());
  data.append('project', formData.project);
  data.append('cv', formData.cv);

  const response = await axios.post(`${API_URL}/talents/register`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// === LOGIN ===
export const loginClient = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};
