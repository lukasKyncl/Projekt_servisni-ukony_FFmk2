
import React, { useState, useEffect } from 'react';
import ServiceTaskForm from './ServiceTaskForm';
import ServiceTaskList from './ServiceTaskList';

interface ServiceTask {
    operation: string;
    year: number;
    amount: number;
}

const ServiceTasks: React.FC = () => {

    const loadServiceTasks = (): ServiceTask[] => {
        const tasksFromStorage = localStorage.getItem('serviceTasks');
        return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    };

    const [serviceTasks, setServiceTasks] = useState<ServiceTask[]>(loadServiceTasks);

    useEffect(() => {
        localStorage.setItem('serviceTasks', JSON.stringify(serviceTasks));
    }, [serviceTasks]);

    const handleAdd = (task: Omit<ServiceTask, 'id'>) => {
        setServiceTasks(prev => [...prev, task]);
    };

    return (
        <div>
            <ServiceTaskList tasks={serviceTasks} />
            <ServiceTaskForm onAddTask={handleAdd} />
        </div>
    );
};

export default ServiceTasks;
