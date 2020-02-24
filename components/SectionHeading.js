import React from 'react';

const SectionHeading = ({ text }) => {
    return(
        <>
            <div className="text-4xl font-heading font-semibold self-center text-indigo-900" > {text} </div>
            <div className="w-20 h-1 bg-indigo-900 self-center mt-2 mb-20" />
        </>
    );
}

export default SectionHeading;