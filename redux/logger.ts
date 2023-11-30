import { PayloadAction, createAction } from "@reduxjs/toolkit";

export const pageViewEvent = createAction<String>('pageViewEvent');

type LogEvent = {
  type: String
  id?: String
  pageName?: String
}

const events: LogEvent[] = [];

const trackEvent = (eventObj: any) => {
  events.push(eventObj);

  console.log(events);
}

const trackEventFromAction = (action:PayloadAction, state: any) => {
  switch (action.type) {
    case 'list/addVote':
      return trackEvent({
        type: 'Add Vote',
        id: action.payload,
      })

    case 'list/setSelectedEmployee':
      return trackEvent({
        type: 'Employee Select',
        id: action.payload
      })
    
    case 'pageViewEvent':
      return trackEvent({
        type: 'Page View',
        pageName: action.payload
      })
    
  }
}

export const logger = (store: any) => (next: any) => (action: PayloadAction) => {
  const result = next(action);
  const state = store.getState();

  trackEventFromAction(action, state);

  return result;
};