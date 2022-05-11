import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoSection = () => {
    return (
        <div className='w-11/12 mx-auto px-6 mb-8 grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <InfoCard icon={clock} bgColor='bg-gradient-to-r from-primary to-secondary' title='Opening Hour'> </InfoCard>
            <InfoCard icon={marker} bgColor='bg-accent' title='Visit our Location'></InfoCard>
            <InfoCard icon={phone} bgColor='bg-gradient-to-r from-primary to-secondary' title='Contact us now'></InfoCard>
        </div>
    );
};

export default InfoSection;