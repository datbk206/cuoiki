import React, {useState} from 'react';

function FindStudent() {
    const [students, setStudents] = useState(['Mung', 'Dat', 'Hiep', 'Son']);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleChange = () => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        setOutput(students.findIndex(input));
    }

    return (
        <div>
            Student: {students}
            <form>
                <label>Input Student Name:</label>
                <input type="text" value={input} onChange={handleChange}>
                <input type="submit" value="Submit" onSubmit= {handleSubmit} />
            </form>
        </div>
    );
}

export default FindStudent;
