
import React from 'react';

interface ServiceTask {
    operation: string;
    year: number;
    amount: number;
}

interface ServiceTaskListProps {
    tasks: ServiceTask[];
}

const ServiceTaskList: React.FC<ServiceTaskListProps> = ({ tasks }) => {
    return (
        <div className='container mb-4'>
            <h2 className='text-center'>Seznam Servisních Úkonů</h2>
            <table className='table table-striped table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Úkon</th>
                        <th>Rok</th>
                        <th>Částka</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.operation}</td>
                            <td>{task.year}</td>
                            <td>{task.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceTaskList;
