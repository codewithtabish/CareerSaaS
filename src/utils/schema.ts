import {z} from 'zod'
export const companySchema=z.object({
    name: z.string().min(2,"Company name must be at least two character long"),
    location: z.string().min(2,"Company location must be defined"),
    about:z.string().min(100,"please provide information about  the comapny"),
    logo:z.string().min(1,'please upload your company logo'),
    website:z.string().url("please enter your company url"),
    xAccount:z.string().optional()
})