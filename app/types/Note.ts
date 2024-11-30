export interface NoteData {
    id: number;
    category: number;
    title: string;
    content: string;
    status: number;
    created_at: Date;
    isImportant?: boolean;

    isCreating?: boolean;
}