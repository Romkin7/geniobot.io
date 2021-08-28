import React, { FC, FormEvent } from 'react';
const Form: FC = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            
        </form>
    )
}

export default Form
