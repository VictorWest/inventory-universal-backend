export const industryNameOptions = ["hospitality", "retail", "healthcare", "education", "office", "agriculture", "manufacturing", "general"] as const
export type IndustryName = typeof industryNameOptions[number]

export const userDesignationOptions = ["user", "super"]
export type UserDesignation = typeof userDesignationOptions[number]