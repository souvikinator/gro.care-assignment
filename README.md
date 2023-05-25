# Video sharing app

[Demo](https://gro-care-assignment.vercel.app/)

## How to run locally?

### In dev mode

1. `npm install`

2. `npm run dev`

### In production mode

1. `npm install`

2. `npm run build`

3. `npm run start`

## Techstack

- NextJs
- TailwindCss

## Description

- Clickable videos that redirects users to a dedicated page displaying the selected video.

- Since the video returned by the API is of short video type so keeping UX in mind, reel like scrolling and autoplay feature is also added. I call it Rolls 😆

- Autoplay is done only when the video is visible in the viewport using intersection observer API.

- Also supports pagination in infinite scroll format for both rolls and video gallery format.

- API calls and states across different pages in done using `react-query`
