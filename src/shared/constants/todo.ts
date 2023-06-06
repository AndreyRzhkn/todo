export enum Buttons {
    CANCEL = "Cancel",
    ADD = "Add",
    COMPLETE = "Complete",
    DELETE = "Delete",
    ADD_NEW_TASK = "ADD NEW ASK",
    DONE = "Done",
}

export enum SortItems {
    ALL = "All",
    NAME = "NAME",
    STATUS = "STATUS",
}

export const sortOptions = [
    { title: "All", value: SortItems.ALL },
    { title: "Name", value: SortItems.NAME },
    { title: "Status", value: SortItems.STATUS },
];
