const getUpdateTime = (updatedAt) => {
    const now = Date.now();
    const difference = now - updatedAt;
    const minutes = Math.floor(difference / 60000);
    const hours = Math.floor(minutes / 60);
    return (
        hours > 0 ? `${hours} hr ${minutes % 60}` : `${minutes} min`
    );
};

export { getUpdateTime }