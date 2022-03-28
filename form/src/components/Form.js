import React, { useState } from 'react'

function Form(submition) {
    const [inputInfo, setInputInfo] = useState({
        id: '',
        user_name: '',
        phone_no: '',
        address: '',
        radio: 'male',
        email: '',
        dob: '',
        checkbox: [],
        desc:''
    });

    const handleCheckbox = (pref) => {
        setInputInfo(prevInfo => {
            // check if the pref is in the pref-list
            const isChecked = prevInfo.checkbox.includes(pref);
            // if True: filter out the pref in the list, create a new list.
            // if False: add the item into the list
            const checkboxListUpdate = isChecked ? prevInfo.checkbox.filter(item => item !== pref) : [...prevInfo.checkbox, pref];
            return{
                ...prevInfo,
                checkbox: checkboxListUpdate
            }
        })
    }

    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // submition.onSubmit()

        // setting the InputInfo to default
        setInputInfo({
            id: '',
            user_name: '',
            phone_no: '',
            address: '',
            radio: 'male',
            email: '',
            dob: '',
            checkbox: [],
            desc:''})
    };

    return (
        <div className="div-form"> 
            <form classname="form" id="form" onSubmit={handleSubmit}>
                {submit ? <div className='success-submition'>Submition Successful!</div> : null}
                <div className='div-input'>
                    <div className='label'>Name<span>*</span></div>
                    <input 
                    value={inputInfo.user_name}
                    onChange={(e) => {
                        setInputInfo({...inputInfo, user_name: e.target.value});
                        // error.name = null;
                    }}
                    className='text-input input-name' 
                    id='input-name' 
                    type='text' 
                    placeholder='Enter your name' 
                    autoComplete='off'/>
                </div>
                
                <div className='div-input'>
                <div className='label'>Phone Number<span>*</span></div>
                    <input 
                        value={inputInfo.phone_no} 
                        className='text-input input-phone' 
                        id='input-phone' type='text' 
                        placeholder='Enter your phone number' 
                        autoComplete='off'
                        onChange={(e) => {
                            setInputInfo({...inputInfo, phone_no: e.target.value});
                        }}/>
                </div>

                <div className='div-input'>
                    <div className='label'>Address<span>*</span></div>
                    <select 
                        name='address' 
                        id='address' 
                        className='address'
                        value={inputInfo.address}
                        onChange={(e) => setInputInfo({...inputInfo, address: e.target.value})}
                        >
                        <option value='' selected disabled>Please choose an option</option>
                        <option 
                            value='ba dinh'>
                                Ba Dinh</option>
                        <option 
                            value='cau giay'>
                                Cau Giay</option>
                    </select>
                </div>

                <div className='div-input'>
                    <div className='label'>
                        Gender<span>*</span>
                    </div>
                    <div className='radio'>
                        <input 
                            type='radio' 
                            name='radio' 
                            id='male' 
                            value='male'
                            onChange={() => setInputInfo({...inputInfo, radio: 'male'})}
                            checked={inputInfo.radio === 'male'}/>
                        
                        <label for='male'>Male</label>
                        
                        <input 
                            type='radio' 
                            name='radio' 
                            id='female' 
                            value='female'
                            onChange={() => setInputInfo({...inputInfo, radio: 'female'})}
                            checked={inputInfo.radio === 'female'}/>
                        
                        <label for='female'>Female</label>
                    </div>
                </div>

                <div className='div-input'>
                    <div className='label'>Email<span>*</span></div>
                    <input
                        value={inputInfo.email}
                        className='text-input input-email' 
                        id='input-email' 
                        type='text' 
                        name='email' 
                        placeholder='Enter your email'
                        onChange={(e) => setInputInfo({...inputInfo, email: e.target.value})}/>
                </div>

                <div className='div-input'>
                    <div className='label'>Date of Birth<span>*</span></div>
                    <input 
                        type="date" 
                        name="dob" 
                        id="dob"
                        className='dob'
                        value={inputInfo.dob}
                        onChange={(e) => setInputInfo({...inputInfo, dob: e.target.value})}/>
                </div>

                {//accept checkbox using a function
                    // if click, add the value of the button to the checkbox []
                    // change the state of the button to checked if the value is in the inputInfo.checkbox []
                    // if unchecked, remove the value out of the list
                    // use onChange to handle the state change
                    // onChange: if the value in the list -> checked, else -> unchecked
                }
                <div className='div-input'>
                    <div className='label'>Choose your preference</div>
                    <div className='div-checkbox'>
                        <input 
                            className="input-check" 
                            type="checkbox" 
                            name="checkbox" 
                            id="" 
                            value="pine"
                            onChange={() => handleCheckbox('pine')}
                            checked={inputInfo.checkbox.includes('pine')}/>
                        <label for="checkbox">Pineapple on pizza</label>
                    </div>

                    <div className='div-checkbox'>
                        <input 
                            className="input-check" 
                            type="checkbox" 
                            name="checkbox" 
                            id="" 
                            value="pepp"
                            onChange={() => handleCheckbox('pepp')}
                            checked={inputInfo.checkbox.includes('pepp')}/>
                        <label for="checkbox">Pepperroni on pizza</label>
                    </div>
                </div>

                {console.log(inputInfo.checkbox)}

                <div className='div-input'>
                    <textarea
                        className="text-input input-desc" 
                        name="desc" 
                        id="desc" 
                        cols="30" 
                        rows="10" 
                        placeholder="Enter your desciption"
                        value={inputInfo.desc}
                        onChange={(e) => setInputInfo({...inputInfo, desc: e.target.value})}>
                    </textarea>
                </div>


                <button type='submit' className='add'>Add</button>
                <button className='update'>Update</button>
            </form>
        </div>
    );
}

export default Form