import { TaskStatus } from "@/enums/task-status.enum";
import { Category } from "./category.interface";
import { TaskPriority } from "@/enums/task-priority.enum";

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: Date;
    createdAt: Date;
    category: Category;    
}