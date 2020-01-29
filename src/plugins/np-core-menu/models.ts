export type Menu = {
    id: string;
    items: MenuItem[];
};

export type MenuItem = {
    id: number;
    type: string;
    className?: string;
    url: string;
    text: string;
}

export type MenuProps = {
    name?: string;
}