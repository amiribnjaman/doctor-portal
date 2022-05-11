import React from 'react';

const InfoCard = ({bgColor, icon, title}) => {

    return (
        <div className=''>
            <div class={`card card-side ${bgColor} text-white shadow-xl flex items-center`}>
                <div className='w-16 pl-4'>
                    <figure><img  src={icon} alt="" /></figure>
                </div>
                <div class="card-body">
                    <h2 class="text-base font-semibold">{title}</h2>
                    <p className='text-sm'>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;