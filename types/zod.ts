import z from "zod";

export const DEFAULT_ROLE = "UNSIGNED"
// export const ACCPETED_FILE_TYPE = [
//   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
//   "application/vnd.ms-excel",
// ];

export const LoginSchema = z.object({
  email: z.string().email("Please enter your valid password."),
  password: z.string().min(8, "Please enter your password.")
});

export const RegisterSchema = z.object({
  first_name: z.string().min(3, "First name is required."),
  last_name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).max(32).optional(),
});

export const SubjectSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().max(250).nullable(),
  status: z.boolean(),
});

export const Subject = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.boolean(),
});

export const SearchForSubjectSchema = z.object({
  title: z.string().min(5).max(100).optional(),
  order: z.boolean(),
});

export const TopicSchema = z.object({
  subjectId: z.string(),
  title: z.string().min(5).max(100),
  description: z.string().max(250).nullable(),
  status: z.boolean(),
});

export const Topic = z.object({
  id: z.string(),
  subjectId: z.string(),
  title: z.string().min(5).max(100),
  description: z.string().max(250).nullable(),
  status: z.boolean(),
});

export const RoleSchema = z.object({
  
});


export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
export type TSearchForSubjectSchema = z.infer<typeof SearchForSubjectSchema>;

export type TRoleSchema = z.infer<typeof RoleSchema>;

export type TSubjectSchema = z.infer<typeof SubjectSchema>;
export type TTopicSchema = z.infer<typeof TopicSchema>;
export type TSubject = z.infer<typeof Subject>; 
export type TTopic = z.infer<typeof Topic>; 