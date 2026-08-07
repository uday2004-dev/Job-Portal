const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://job-portal-rquu.onrender.com";

export const USER_API_ENDPOINT = `${BASE_URL}/api/users`;
export const JOB_API_ENDPOINT = `${BASE_URL}/api/job`;
export const APPLICATION_API_ENDPOINT = `${BASE_URL}/api/application`;
export const COMPANY_API_ENDPOINT = `${BASE_URL}/api/company`;