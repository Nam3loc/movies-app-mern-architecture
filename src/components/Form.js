import {useState, useEffect} from 'react';

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: ''
    })

    // Function that updates form when we type into it
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        props.getMovie(formData.searchterm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value="submit" 
                />
            </form>
        </div>
    )
}