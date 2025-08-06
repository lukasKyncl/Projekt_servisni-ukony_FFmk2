
import React, { useState } from 'react';

interface ServiceTask {
    operation: string;
    year: number;
    amount: number;
}

interface ServiceTaskFormProps {
    onAddTask: (task: ServiceTask) => void;
}

const ServiceTaskForm: React.FC<ServiceTaskFormProps> = ({ onAddTask }) => {
    const [operation, setOperation] = useState('');
    const [year, setYear] = useState<number | ''>('');
    const [amount, setAmount] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (operation && year && amount) {
            const newTask: ServiceTask = { operation, year, amount };
            onAddTask(newTask);

            setOperation('');
            setYear('');
            setAmount('');
        } else {
            alert("Musíte vyplnit všechny údaje.");
        }
    };

    return (
        <div>
            <h2 className='text-center'>Přidat nový úkon</h2>
            <form onSubmit={handleSubmit} className='container mb-4'>
                <div className='row g-3 align-items-center'>
                    <div className='col-md-4'>
                        <label htmlFor="operation" className='form-label'>Úkon</label>
                        <input
                            type="text"
                            placeholder="Úkon"
                            className='form-control'
                            id='operation'
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                        />
                    </div>
                    <div className='col-md-2'>
                        <label htmlFor="year" className='form-label'>Rok</label>
                        <input
                            type="number"
                            placeholder="Rok"
                            className='form-control'
                            id='year'
                            value={year}
                            onChange={(e) => setYear(Number(e.target.value))}
                            required
                            min={2018}
                            max={new Date().getFullYear()}
                        />
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor="amount" className='form-label'>Částka</label>
                        <input
                            type="number"
                            placeholder="Částka"
                            className='form-control'
                            id='amount'
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>
                    <div className='col-md-3 d-flex align-items-end'>
                        <button type="submit" className='btn btn-primary'>Přidat Úkon</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ServiceTaskForm;