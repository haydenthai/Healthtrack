import React from 'react';
import jsdom from 'jsdom';
import { createRoot } from 'react-dom/client';
import Scheduler from 'src/components/physician/Scheduler';

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window as unknown as Window & typeof globalThis;

describe('<Scheduler />', () => {
    test('should render the element correctly', async () => {
        const container = document.createElement('div');
        createRoot(container).render(
            <Scheduler isDate={false} year={0} month={0} monday={0} i={0} />
        );
        expect(container).toMatchSnapshot();
    });

    test('should add appointment when clicking on a time slot', async () => {
        const container = document.createElement('div');
        createRoot(container).render(
            <Scheduler isDate={false} year={0} month={0} monday={0} i={0} />
        );
        const timeSlot = container.querySelector('.time-slot');
        timeSlot?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(container).toMatchSnapshot();
    });

    test('should remove appointment when clicking on a time slot', async () => {
        const container = document.createElement('div');
        createRoot(container).render(
            <Scheduler isDate={false} year={0} month={0} monday={0} i={0} />
        );
        const timeSlot = container.querySelector('.time-slot');
        timeSlot?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        timeSlot?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(container).toMatchSnapshot();
    });
});
