import {z} from 'zod';

const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error: 'Password must string',
    }).max(20, {message: "password cannot more than 20 characters"}).optional(),
});

export const UserValidation = {
    userValidationSchema,
}