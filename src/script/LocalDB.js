const Storage = window.localStorage;

export const SaveTasks = (tasks) => {
    Storage.setItem('task-list', JSON.stringify(tasks));
    return true;
}

export const GetTasks = () => {
    let tasks = Storage.getItem('task-list');
    if(tasks == undefined || tasks == null) return [];
    else return JSON.parse(tasks);
}