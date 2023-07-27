# mod5-day-planner
Module 5 Challenge Assignment - work day scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description

- This is a simple calendar application that allows a user to save events for each hour of the day.
- Text input is saved to local storage
- Delete button clears the local storage data and text input
- Current date and time displayed at top
- Using dayjs, references the current time to update the color of timeblocks

# Github Repo

https://github.com/kumih0/mod5-day-planner

# Live Link 

https://kumih0.github.io/mod5-day-planner/