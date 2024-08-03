const now = new Date().valueOf();
console.log("now: ", now);

// Calculate date ranges
const oneDayAgo = now - (24*60*60*1000);
console.log("oneDayAgo: ", oneDayAgo);

const oneWeekAgo = now - (7*24*60*60*1000);
console.log("oneWeekAgo: ", oneWeekAgo);

const oneMonthAgo = now - (30*24*60*60*1000);
console.log("oneMonthAgo: ", oneMonthAgo);

const threeMonthsAgo = now - (90*24*60*60*1000);
console.log("threeMonthsAgo: ", threeMonthsAgo);

const sixMonthsAgo = now - (180*24*60*60*1000);
console.log("sixMonthsAgo: ", sixMonthsAgo);




export {now, oneDayAgo, oneWeekAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo};