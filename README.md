# React take-home exercise

The goal of this take-home exercise is to provide insight into your hard skills
when working with React as a mid/senior engineer. This exercise is meant to be
completed within a reasonable amount of time, so **please don't spend more than four
hours**. If you can't complete the exercise within four hours, please submit your
solution at the four hour mark, and we can evaluate what was completed.

## Setup

```bash
npm install

npm run dev
```

## Requirements

- Render a form that contains the following fields:
  - Full name (text input)
  - Description (multiline text input)
  - Country (select input of countries)
- Upon form submission, POST form data to `/api/parrot`
  - Handle successful responses, and displays success message in interface
  - Handle errored responses, and display error in interface
  - Handle 'fetching' or 'loading' state, and display loading indicator
  - Render response from API somewhere on the page, specifically the `timeout` field
- Persist form values beyond the lifecycle of the page
  - Should persist between page refresh
  - Should persist if page is closed and reopened

### Bonus points

None of this is required, but would be nice to see.

- Display loading indicator as an animated SVG icon
- Deploy it
- Split full name into separate first and last name strings to send to
  endpoint, but keep single full name field in the interface

## Architecture

This is setup as a very rudimentary Next.js React application, with Water.css
as a minimal CSS framework. You are not expected to style anything against
mocks, but we do expect you to follow HTML5 semantic markup as much as possible
so that Water.css renders your work with a baseline visual treatment.

A simple API endpoint has been created under `/pages/api/parrot.js` which
randomly errors out. The endpoint returns what was sent to it when successful, along with a
`timeout` field that indicates how long (milliseconds) the request took.
