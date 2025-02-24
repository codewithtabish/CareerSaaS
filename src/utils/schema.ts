import {z} from 'zod'
export const companySchema=z.object({
    name: z.string().min(2,"Company name must be at least two character long"),
    location: z.string().min(2,"Company location must be defined"),
    about:z.string().min(100,"please provide information about  the comapny"),
    logo:z.string().min(1,'please upload your company logo'),
    website:z.string().url("please enter your company url"),
    xAccount:z.string().optional()
})


export const jobSeekerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    about: z.string().min(10, "Please provide more information about yourself"),
    resume: z.string().min(1, "Please upload a resume"),
  });