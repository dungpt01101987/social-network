// ProgressBarComponent.js
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressBarComponent = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Giả định việc nạp dữ liệu hoặc xử lý công việc nào đó
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress((prevProgress) => prevProgress + 10);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [progress]);

    return <ProgressBar now={progress} label={`${progress}%`} />;
};

export default ProgressBarComponent;