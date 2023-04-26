import { Flex, useAuthenticator, View } from '@aws-amplify/ui-react';

import React, { useEffect, useState } from 'react';
import * as AmpUI from '@aws-amplify/ui-react';
import { calendar } from '../util/schedulerMockData';
import type { AmplifyUser } from '@aws-amplify/ui';
import Scheduler from '../components/physician/Scheduler';
import {
    getCurrentMonday,
    IsLeapYear,
} from '../components/physician/physicianUtils';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/base.scss';
import {
    CancelableEventHandler,
    ClickDetail,
} from '@cloudscape-design/components/internal/events';
import { AppLayout, Button, Container, Icon } from '@cloudscape-design/components';
import { Physician } from '../models';
import { DataStore, Hub } from 'aws-amplify';

export interface PhysicianProps {
    user?: AmplifyUser;
}

function PhysicianScheduler({ user }: PhysicianProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [isDate, setIsDate] = useState(false);
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth());
    const [day, setDay] = useState<number>(
        new Date(getCurrentMonday()).getDate()
    );
    const [weekCounter, setWeekCounter] = useState(0);
    const [physicians,  setPhysicians] = useState<any[]>([]);

    function handleShiftWeekLeft():
        | CancelableEventHandler<ClickDetail>
        | undefined {
        if (weekCounter - 1 < 0) return;
        setWeekCounter(weekCounter - 1);

        let year = new Date().getFullYear();
        let isLeapYear: boolean = IsLeapYear(year);

        switch (month) {
            //January
            case 0:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(11);
                    setYear(year - 1);
                    if (new Date(year - 1, 11, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 11, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //February
            case 1:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(0);
                    if (new Date(year, 0, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 0, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //March
            case 2:
                if (day - 7 < 1) {
                    setDay(isLeapYear ? 29 : 28);
                    setMonth(1);
                    if (
                        new Date(year, 1, isLeapYear ? 29 : 28).getDay() !== 1
                    ) {
                        for (let i = 1; i <= 6; i++) {
                            if (
                                new Date(
                                    year,
                                    1,
                                    isLeapYear ? 29 : 28 - i
                                ).getDay() === 1
                            ) {
                                setDay(isLeapYear ? 29 : 28 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //April
            case 3:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(2);
                    if (new Date(year, 2, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 2, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //May
            case 4:
                if (day - 7 < 1) {
                    setDay(30);
                    setMonth(3);
                    if (new Date(year, 3, 30).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 3, 30 - i).getDay() === 1) {
                                setDay(30 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //June
            case 5:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(4);
                    if (new Date(year, 4, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 4, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //July
            case 6:
                if (day - 7 < 1) {
                    setDay(30);
                    setMonth(5);
                    if (new Date(year, 5, 30).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 5, 30 - i).getDay() === 1) {
                                setDay(30 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //August
            case 7:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(6);
                    if (new Date(year, 6, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 6, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //September
            case 8:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(7);
                    if (new Date(year, 7, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 7, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //October
            case 9:
                if (day - 7 < 1) {
                    setDay(30);
                    setMonth(8);
                    if (new Date(year, 8, 30).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 8, 30 - i).getDay() === 1) {
                                setDay(30 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //November
            case 10:
                if (day - 7 < 1) {
                    setDay(31);
                    setMonth(9);
                    if (new Date(year, 9, 31).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 9, 31 - i).getDay() === 1) {
                                setDay(31 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
            //December
            case 11:
                if (day - 7 < 1) {
                    setDay(30);
                    setMonth(10);
                    if (new Date(year, 10, 30).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 10, 30 - i).getDay() === 1) {
                                setDay(30 - i);
                            }
                        }
                    }
                } else {
                    setDay(day - 7);
                }
                return;
        }

        return;
    }
    function handleShiftWeekRight():
        | CancelableEventHandler<ClickDetail>
        | undefined {
        //Changes the index in our calendar to the next week
        if (weekCounter + 1 > 7) return;
        setWeekCounter(weekCounter + 1);

        let year = new Date().getFullYear();
        let isLeapYear: boolean = IsLeapYear(year);

        switch (month) {
            // January
            case 0:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(1);
                    if (new Date(year, 1, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 1, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //February
            case 1:
                if (day + 7 > (isLeapYear ? 29 : 28)) {
                    setDay(1);
                    setMonth(2);
                    if (new Date(year, 2, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 2, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //March
            case 2:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(3);
                    if (new Date(year, 3, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 3, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //April
            case 3:
                if (day + 7 > 30) {
                    setDay(1);
                    setMonth(4);
                    if (new Date(year, 4, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 4, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //May
            case 4:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(5);
                    if (new Date(year, 5, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 5, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //June
            case 5:
                if (day + 7 > 30) {
                    setDay(1);
                    setMonth(6);
                    if (new Date(year, 6, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 6, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //July
            case 6:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(7);
                    if (new Date(year, 7, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 7, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            case 7:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(8);
                    if (new Date(year, 8, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 8, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //September
            case 8:
                if (day + 7 > 30) {
                    setDay(1);
                    setMonth(9);
                    if (new Date(year, 9, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 9, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //October
            case 9:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(10);
                    if (new Date(year, 10, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 10, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //November
            case 10:
                if (day + 7 > 30) {
                    setDay(1);
                    setMonth(11);
                    if (new Date(year, 11, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 11, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
            //December
            case 11:
                if (day + 7 > 31) {
                    setDay(1);
                    setMonth(0);
                    setYear(year + 1);
                    if (new Date(year + 1, 0, 1).getDay() !== 1) {
                        for (let i = 1; i <= 6; i++) {
                            if (new Date(year, 0, 1 + i).getDay() === 1) {
                                setDay(1 + i);
                            }
                        }
                    }
                } else {
                    setDay(day + 7);
                }
                return;
        }
    }
    useEffect(() => {
        let x = async () => {
            const models = await DataStore.query(Physician);
            console.log(models);

        }
        x();
    },[]);

    useEffect(() => {
        const removeListener = Hub.listen('datastore', async (capsule) => {
            const {
                payload: { event, data },
            } = capsule;

            if (event === 'ready') {
               const physicians = await DataStore.query(Physician)
               setPhysicians(physicians)
                console.log(physicians)
            }
        });
        DataStore.start();
    
        // setTimeout(async ()=>{
        //     console.log(await DataStore.query(Physician, '6d7051de-bb75-47d0-8854-54333f26531e'))
        // }, 5000)


        return () => {
            removeListener();
        };
    },[])

    return (
        <AppLayout
            headerSelector="#header"
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            navigation={
                <>
                    <Navigation signOut={signOut} />
                </>
            }
            content={
                <>
                    <AmpUI.Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="flex-start"
                        wrap="nowrap"
                        gap="1rem"
                    >
                        <Button onClick={handleShiftWeekLeft}>
                            <Icon name="caret-left-filled" />
                        </Button>
                        <AmpUI.SwitchField
                            label={`${isDate ? 'Showing Day' : 'Showing Date'}`}
                            onChange={() => setIsDate(!isDate)}
                        />
                        <Button onClick={handleShiftWeekRight}>
                            <Icon name="caret-right-filled" />
                        </Button>
                    </AmpUI.Flex>
                    <Container

                        >

                            <Scheduler
                                isDate={isDate}
                                year={year}
                                month={month}
                                monday={day}
                                i={weekCounter}
                            />
                    </Container>
                </>
            }
        />
    );
}

export default PhysicianScheduler;
