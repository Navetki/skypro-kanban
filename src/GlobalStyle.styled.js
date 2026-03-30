import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: inherit; 
    background-color: inherit;
  }

  a, button {
    cursor: pointer;
    text-decoration: none;
  }

   .react-calendar {
    border: none !important;
    background: transparent !important; 
    width: 100% !important;
    font-family: inherit !important;
  }

  .react-calendar__viewContainer, 
  .react-calendar__month-view > div, 
  .react-calendar__month-view__days {
    display: block !important;
  }

 
  .react-calendar__month-view__days {
  display: grid !important;
  grid-template-columns: repeat(7, 1fr) !important;
  }

  
  .react-calendar__navigation {
   display: flex !important;
  width: 100% !important;
  height: 44px !important;
  margin-bottom: 10px !important;
  background: none !important;
  }

   .react-calendar__navigation__label {
  flex-grow: 0 !important; 
  order: 1 !important;    
  text-align: left !important;
  padding: 0 !important;
  min-width: fit-content !important;
  margin-right: auto !important; 
   color: #94A6BE !important;
}

  .react-calendar__navigation__label__textContent {
 font-size: 14px !important;
  font-weight: 600 !important;
  color: inherit !important; 
  text-transform: capitalize;
  }


  .react-calendar__navigation__arrow {
  background: none !important;
  font-size: 20px !important;
  min-width: 32px !important;
  border: none !important;
  cursor: pointer;
}


  .react-calendar__navigation__prev-button {
  order: 2 !important;    
  color: #94A6BE !important;
  }

.react-calendar__navigation__next-button {
  order: 3 !important;    
  color: #94A6BE !important;
}
 
  .react-calendar__tile {
     aspect-ratio: 1 / 1 !important; 
  height: auto !important;
  color: #94A6BE !important; 
  font-size: 12px !important;
  background: none !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  }
.react-calendar__tile--now {
  font-weight: 900 !important;
  background: transparent !important;
}
  
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover {
    background: #94A6BE !important; 
  color: #FFFFFF !important;
  border-radius: 50% !important;
  }


  .react-calendar__tile:enabled:hover {
    background-color: rgba(148, 166, 190, 0.2) !important;
    border-radius: 50% !important;
  }

 
  .react-calendar__month-view__weekdays__weekday abbr {
    color: #94A6BE !important;
    text-decoration: none !important;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  
  .react-calendar abbr {
    text-decoration: none !important;
    
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none !important;
  }

  
  .dark-theme .react-calendar,
  .dark-theme .react-calendar__navigation,
  .dark-theme .react-calendar__viewContainer {
    background-color: #20202c !important;
    color: #FFFFFF !important;
      border: none !important; 
  }

  .dark-theme .react-calendar__navigation__label__textContent {
    color: #FFFFFF !important; 
  }

  
  .dark-theme [class*="Calendar"], 
  .dark-theme [class*="PopNewCard"],
  .dark-theme [class*="PopBrowse"] {
    background-color: #20202c !important;
    color: #ffffff !important;
  }

  
  .dark-theme .react-calendar__month-view__days__day--neighboringMonth {
    color: #4e5566 !important;
  }
    .dark-theme .pop-exit__block {
    background-color: #20202c !important;
    color: #ffffff !important;
    border: 0.7px solid #4e5566;
  }

  .dark-theme .pop-exit__ttl h2 {
    color: #ffffff !important;
  }

  .dark-theme .pop-exit__exit-no {
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
  
  .dark-theme .pop-exit__exit-no:hover {
    background-color: #4e5566;
    color: #ffffff;
  }
`;
