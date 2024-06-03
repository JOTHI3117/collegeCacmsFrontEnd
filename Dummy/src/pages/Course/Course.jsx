import React from 'react';

const Course = () => {
    // Define engineering courses with descriptions for UG and PG
    const undergraduateCourses = [
        { name: "Computer Science Engineering", description: "Focuses on computer programming, algorithms, software development, and system architecture." },
        { name: "Mechanical Engineering", description: "Deals with the design, construction, and operation of machines and mechanical systems." },
        { name: "Electronics and Communication Engineering", description: "Involves the study of electronic devices, circuits, communication systems, and signal processing." },
        { name: "Electrical Engineering", description: "Concentrates on electrical systems, power generation, transmission, and distribution." },
        { name: "Electrical and Electronics Engineering", description: "Combines electrical and electronics principles for designing and developing electrical systems and devices." },
        { name: "Civil Engineering", description: "Focuses on the design, construction, and maintenance of infrastructure like buildings, roads, bridges, and dams." },
        { name: "Chemical Engineering", description: "Involves the application of chemistry and engineering principles to design and operate chemical processes." },
        { name: "Information Technology", description: "Concentrates on the use of computers and telecommunications to store, retrieve, and transmit data." },
        { name: "Instrumentation and Control Engineering", description: "Focuses on the design and implementation of instrumentation systems for control processes." },
        { name: "Electronics Engineering", description: "Involves the design and development of electronic systems and devices." },
        // Add descriptions for other UG courses here
    ];

    const postgraduateCourses = [
        // Add PG courses here
        { name: "M.Tech in Computer Science Engineering", description: "Advanced study in computer science with a focus on research and specialization." },
        { name: "M.Tech in Mechanical Engineering", description: "Advanced study in mechanical engineering, often with specialization options." },
        { name: "M.Tech in Electronics and Communication Engineering", description: "Advanced study in electronics and communication systems, including advanced signal processing and communication protocols." },
        // Add descriptions for other PG courses here
    ];

    // Render engineering courses with descriptions using Bootstrap cards
    const renderEngineeringCourses = (courses) => {
        return (
            <div className="container mt-4">
                <h2 className="mb-4">{courses === undergraduateCourses ? 'Undergraduate Engineering Courses' : 'Postgraduate Engineering Courses'}</h2>
                <div className="row">
                    {courses.map(course => (
                        <div key={course.name} className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>
                                {/* Additional style for hover effect */}
                                <style>{`
                                    .card:hover {
                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                                        transform: translateY(-5px);
                                        transition: box-shadow 0.3s ease, transform 0.3s ease;
                                    }
                                `}</style>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderEngineeringCourses(undergraduateCourses)}
            {renderEngineeringCourses(postgraduateCourses)}
        </div>
    );
};

export default Course;
