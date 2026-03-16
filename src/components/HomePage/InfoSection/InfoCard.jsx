import React from 'react';

const InfoCard = ({info}) => {
    const {preTitle,title,endTitle}=info
    return (
        <div>
            <h4 className='text-sm md:text-[16px] text-white/60 text-center'>{preTitle}</h4>
            <h2 className='text-white text-center text-4xl md:text-5xl lg:text-6xl  2xl:text-[64px] font-bold xl:font-extrabold py-3 md:py-4'>{title}</h2>
            <h4 className='text-sm md:text-[16px] text-white/60 text-center'>{endTitle}</h4>
        </div>
    );
};

export default InfoCard;