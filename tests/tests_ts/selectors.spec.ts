import { test, expect } from '@playwright/test';

test('Selectors Community', async({page})=> {

    //connect to page
    await page.goto('http://localhost:3000/');

    //Check that the images exist.
    await page.locator('.Header_logo__yE2GW').click();
    await page.getByRole('heading', { name: 'Welcome to CommunityConnect' }).click();
    await page.getByRole('heading', { name: 'Empowering Immigrants Through Connection' }).click();
    await page.getByText('Step into a vibrant and inclusive digital space designed exclusively for immigra').click();
    await page.getByRole('img', { name: 'group of people' }).click();
    await page.getByRole('heading', { name: 'Events and Activities' }).click();
    await page.getByText('Discover a vibrant calendar of events on CommunityConnect, the innovative web ap').click();
    await page.getByRole('img', { name: 'peple behind a calendar' }).click();
    await page.getByRole('heading', { name: 'Mentorship' }).click();
    await page.getByText('Connect with experienced mentors who understand the challenges and opportunities').click();
    await page.getByRole('img', { name: 'man and a laptop' }).click();
    await page.getByRole('heading', { name: 'Our partners' }).click();
    await page.locator('section').filter({ hasText: 'Our partners' }).getByRole('button').nth(1).click();
    await page.locator('section').filter({ hasText: 'Our partners' }).getByRole('button').nth(1).click();
    await page.getByRole('heading', { name: 'Resource Hub' }).click();
    await page.getByText('Access to quality education is essential for personal and professional growth. T').click();
    await page.getByRole('img', { name: 'image of human and laptop' }).click();

    //Check Top Menu
    await page.getByRole('link', { name: 'Events', exact: true }).click();
    await page.getByRole('link', { name: 'Resources' }).click();
    await page.getByRole('link', { name: 'Mentorship', exact: true }).click();
    await page.getByRole('link', { name: 'FAQ' }).click();
    await page.getByRole('link', { name: 'About Us' }).click();

    //Check Bottom Menu
    await page.getByRole('heading', { name: 'Work with us' }).click();
    await page.getByRole('heading', { name: 'Events', exact: true }).click();
    await page.getByRole('heading', { name: 'Contacts' }).click();
    await page.getByRole('link', { name: 'Apply for mentorship' }).click();
    await page.getByRole('link', { name: 'Become a mentor' }).click();
    await page.getByRole('link', { name: 'Become a partner' }).click();
    await page.getByRole('link', { name: 'Upcoming Events' }).click();
    await page.getByRole('link', { name: 'Past Recordings' }).click();
    await page.getByRole('contentinfo').getByRole('button').click();

    //Social Networks
    await page.locator('.Icon_icon__An8LW').first().click();
    await page.locator('.Footer_socials__4ZSCH > a:nth-child(2)').click();
    await page.locator('.Footer_socials__4ZSCH > a:nth-child(3)').click();
})