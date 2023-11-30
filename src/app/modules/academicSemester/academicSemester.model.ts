import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.inerface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.const";

const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        required: true,
        enum: AcademicSemesterName,
    },
    year: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemesterCode,
    },
    startMonth: {
        type: String,
        required: true,
        enum: Months,
    },
    
    endMonth: {
        type: String,
        required: true,
        enum: Months,
    },
    
},
{
    timestamps: true,
});

academicSemesterSchema.pre('save', async function(next){
    const isSemesterExists = await academicSemester.findOne({
        year : this.year,
        name : this.name,
    });
    if(isSemesterExists){
        throw new Error('semester exists already');
    }
    next();

});



export const academicSemester = model<TAcademicSemester>('academicSemester', academicSemesterSchema);