import { Employers } from "./Employers"
import { Jobseekers } from "./Jobseeker";

export interface JobseekerProfile {
    jobseeker: Jobseekers;
    fullname:any;
    about_me: any;
    phone_number: any;
    email: string;
    location: string;
    educational_qualification: string;
    professional_designation: string;
    experience_years: number;
    employer: Employers;
    job_category: string; 
    salary: number;
    availability: string;
    create_at:Date;
}