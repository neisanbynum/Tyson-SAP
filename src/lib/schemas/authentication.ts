import * as z from "zod/v4"

export const UserSchema = z.object({
    id: z.coerce.string().regex(/^[0-9]{1,8}$/, "Employee ID must be 1-8 digit number"),

})