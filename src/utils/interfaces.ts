export interface Item {
    id: number;
    title: string;
    description?: string;
    type: string;
    category: string;
    location: string;
    date: string;
    status?: string;
    images?: {
        [key: string]: {
            original_url: string;
        };
    };
    user?: User;
}

export interface ItemProps {
    item: Item;
}

export interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export interface FormData {
    title: string;
    category: string;
    type: string;
    description: string;
    location: string;
    date: string;
    images: File[];
}
