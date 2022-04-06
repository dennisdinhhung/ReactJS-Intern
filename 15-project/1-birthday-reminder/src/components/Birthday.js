import React, { useState } from 'react'

function Birthday() {
    const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(5);

    const resetUI = () => {
        setVisible(false)
        setCount(0)
    }

    return (
        <div className='birthday'>
            <div className='element'>
                <div>{count} birthdays today</div>
                <div className={visible ? 'visible': 'invisible'}>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt=''width='100px'/>
                        <div className='div-name'>
                            Bertie Yates
                        </div>
                        <div className='div-age'>
                            29 Years
                        </div>
                    </div>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt=''width='100px'/>
                        <div className='div-name'>
                            Bertie Yates
                        </div>
                        <div className='div-age'>
                            29 Years
                        </div>
                    </div>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt=''width='100px'/>
                        <div className='div-name'>
                            Bertie Yates
                        </div>
                        <div className='div-age'>
                            29 Years
                        </div>
                    </div>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt=''width='100px'/>
                        <div className='div-name'>
                            Bertie Yates
                        </div>
                        <div className='div-age'>
                            29 Years
                        </div>
                    </div>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt=''width='100px'/>
                        <div className='div-name'>
                            Bertie Yates
                        </div>
                        <div className='div-age'>
                            29 Years
                        </div>
                    </div>
                </div>
                <div className='button-clear'>
                    <button
                        onClick={
                        resetUI}>
                        Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Birthday