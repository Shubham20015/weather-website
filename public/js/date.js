const getCurrentDay = () => {
    const day = document.getElementById('day');
    let weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let currentTime = new Date();
    
    day.innerText = weekday[currentTime.getDay()];
};
getCurrentDay();
const getCurrentTime = () => {
    const date = document.getElementById('today_date')
    let months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
    let now = new Date();
    let month = months[now.getMonth()];
    let dates = now.getDate();

    date.innerText = `${dates} ${month}`;
};
getCurrentTime();