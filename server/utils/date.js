// server/utils/date.js
function getDateRange(time) {
    const now = Date.now(); // Get the current time in milliseconds
    let dateRange;

    switch (time) {
        case '1d':
            dateRange = now - (24 * 60 * 60 * 1000);
            break;
        case '1w':
            dateRange = now - (7 * 24 * 60 * 60 * 1000);
            break;
        case '1m':
            dateRange = now - (30 * 24 * 60 * 60 * 1000);
            break;
        case '3m':
            dateRange = now - (90 * 24 * 60 * 60 * 1000);
            break;
        case '6m':
            dateRange = now - (180 * 24 * 60 * 60 * 1000);
            break;
        default:
            dateRange = null; // Handle invalid time parameters
    }

    return dateRange;
}

export { getDateRange };