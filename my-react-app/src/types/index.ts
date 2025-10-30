export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface SearchProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}