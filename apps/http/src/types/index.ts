import z from "zod"

export const SignUpSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(100),
    type: z.enum(["user", "admin"]),
})

export const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(100),
})

export const UpdateMetadataSchema = z.object({
    avatarId: z.string()
})

export const CreateSpaceSchema = z.object({
    name: z.string().min(3).max(20),
    dimension: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/),
    mapId: z.string(),
})

export const AddElementSchema = z.object({
    spaceId: z.string(),
    elementId: z.string(),
    x: z.number(),
    y: z.number(),
})

export const CreateElementSchema = z.object({
    imageUrl: z.string(),
    width: z.number(),
    height: z.number(),
    static: z.boolean(),
})

export const UpdateElementSchema = z.object({
    imageurl: z.string(),
})

export const CreateAvatarSchema = z.object({
    name: z.string().min(3).max(20),
    imageUrl: z.string(),
})

export const CreateMapSchema = z.object({
    thumbnail: z.string(),
    dimension: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/),
    defaultElements: z.array(z.object({
        elementId: z.string(),
        x: z.number(),
        y: z.number(),
    })), 
})



