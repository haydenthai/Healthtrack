import React, { useEffect, useState } from 'react';
import {
    AppointmentPicker,
    AppointmentAttributesType,
} from 'react-appointment-picker';
import { calendar } from '../../util/schedulerMockData';

interface SchedulerProps {
    isDate: boolean;
    year: number;
    month: number;
    monday: number;
    i: number
}

function Scheduler({ isDate, year, month, monday, i }: SchedulerProps) {
    const [currentWeek, setCurrentWeek] = useState(calendar[i]);

    const physicianStartTime = 9;
    useEffect(() => {
        setCurrentWeek(calendar[i]);
    }, [currentWeek, i]);

    async function addAppointmentCallback({
        addedAppointment: { day, number, time, id },
        addCb,
    }: any): Promise<any> {

        // addCb changes the color of the box to green
        addCb(day, number, time, id);
        


        let newWeek = [...currentWeek];
        for (let i = 0; i < newWeek.length; i++) {
            for (let j = 0; j < newWeek[i].length; j++) {
                if (newWeek[i][j].id === id) {
                    newWeek[i][j].isSelected = true;

                    // newWeek[i][j].isReserved = true;

                }
            }
        }
        setCurrentWeek(newWeek);
    }

    async function removeAppointmentCallback(
        { day, number, time, id }: any,
        removeCb: (arg0: any, arg1: any) => void
    ): Promise<any> {

        //removeCb changes the color of the box from green to blue
        removeCb(day, number);
        let newWeek = [...currentWeek];

        for (let i = 0; i < newWeek.length; i++) {
            for (let j = 0; j < newWeek[i].length; j++) {
                if (
                    newWeek[i][j].id === id &&
                    newWeek[i][j].isSelected === true
                ) {
                    newWeek[i][j].isSelected = false;
                }
            }
        }
        setCurrentWeek(newWeek);
    }
    return (
        <div>
            <AppointmentPicker
                addAppointmentCallback={addAppointmentCallback}
                removeAppointmentCallback={removeAppointmentCallback}
                days={currentWeek as AppointmentAttributesType[][]}
                initialDay={new Date(year, month, monday, physicianStartTime)}
                unitTime={1_800_000}
                selectedByDefault={true}
                maxReservableAppointments={1000}
                local="en-US"
                alpha={isDate}
                visible={true}
            />
        </div>
    );
}

export default Scheduler;
