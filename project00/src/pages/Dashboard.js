import React from 'react';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
    const courses = [
        { title: 'Course 1', description: 'Description for Course 1' },
        { title: 'Course 2', description: 'Description for Course 2' },
        { title: 'Course 3', description: 'Description for Course 3' },
    ];

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="course-list">
                {courses.map((course, index) => (
                    <CourseCard key={index} title={course.title} description={course.description} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
