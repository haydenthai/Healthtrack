export const getCurrentMonday = () => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    //if day is sunday or saturday, set date to next monday
    if (day === 0 || day === 6) {
        currentDate.setDate(currentDate.getDate() + ((1 + 7 - day) % 7));
    } else {
        currentDate.setDate(currentDate.getDate() - day + 1);
    }

    return `${currentDate.toLocaleString('default', {
        month: 'long',
    })} ${currentDate.getDate()}, ${currentDate.getFullYear()} 9:00:00`;
};

export const IsLeapYear = (year: number) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}


export const GetMonday = (year:number, month:number, day:number) => {
    let yr, mo, dy;
    switch(month) {
        case 1:
            if (day > 31) {
                mo = 2;
                dy = day - 31;
            }
    }
    return {yr, mo, dy}
}

