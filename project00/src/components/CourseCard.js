import React from 'react';

const CourseCard = ({ title, description }) => {
    return (
        <div className="course-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default CourseCard;
