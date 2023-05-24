import {z} from "zod"

export const state = z.object({

})

export const TaskDescriptionZ = z.object({
    id: z.string(),
    description: z.string(),
    emoji: z.string(),
    secondsToSeverityOne: z.number().int().positive(),
    secondsToSeverityTwo: z.number().int().positive(),
    secondsToSeverityThree: z.number().int().positive(),
    secondsToSeverityFour: z.number().int().positive(),
})

export const TaskStatusZ = z.object({
    lastCompletedAt: z.number().int().positive().optional()
})

export const SeverityZ = z.enum(['0', '1', '2', '3', '4'])
export type Severity = z.infer<typeof SeverityZ>
// in the default colour scheme, this will match up with:
// 0: blue
// 1: green
// 2: yellow
// 3: orange
// 4: red
// Use string instead of numbers because it's easier to use them as keys this way

export const TaskZ = z.object({
    description: TaskDescriptionZ,
    status: TaskStatusZ
})

export type Task = z.infer<typeof TaskZ>