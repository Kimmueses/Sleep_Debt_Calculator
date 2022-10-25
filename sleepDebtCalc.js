const getSleepHours = day => {
    if(day === 'monday') {
        return 5;
    }
    else if(day === 'tuesday') {
        return 7;
    }
    else if(day === 'wednesday') {
        return 6;
    }
    else if(day === 'thursday') {
        return 4;
    }
    else if(day === 'friday') {
        return 7;
    }
    else if(day === 'saturday') {
        return 6;
    }
    else if(day === 'sunday') {
        return 5;
    } else {
        return 'Error!'
    }
};

//console.log(getSleepHours('red'));

const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');   

//console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    const idealHours = 7;
        return idealHours * 7;
};

//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
        console.log("Perfect amount of sleep");
    }        
    else if(actualSleepHours > idealSleepHours) {
        console.log("You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed");
    }        
    else if(actualSleepHours < idealSleepHours) {
        console.log("You got " + (idealSleepHours-actualSleepHours) + " hours of sleep and should get some rest");
    } else {
        console.log("Error");
    }    
};

calculateSleepDebt();