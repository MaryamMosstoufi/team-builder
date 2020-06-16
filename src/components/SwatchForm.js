import React from 'react';

export default function SwatchForm(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Color Code:&nbsp;
                    <input
                        type='color'
                        name='colorCode'
                        value={values.colorCode}
                        onChange={onInputChange}
                    />
                </label><br /><br />
                <label>Color Name:&nbsp;
                    <input
                        type='text'
                        name='colorName'
                        value={values.colorName}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label><br /><br />
                <label>Color Family:&nbsp;
                    <input
                        type='text'
                        name='colorFamily'
                        value={values.colorFamily}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label><br /><br />
                <div className='form-group submit'>
                    <button>Add Color</button>
                </div>
            </div>
        </form>
    )
}