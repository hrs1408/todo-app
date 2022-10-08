export interface TodoModel {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoResponse {
    data: TodoModel[];
}