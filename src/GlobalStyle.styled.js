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
    border: none;
    background: transparent; 
    width: 100%;
    font-family: inherit;
  }

  .react-calendar__viewContainer, 
  .react-calendar__month-view > div, 
  .react-calendar__month-view__days {
    display: block;
  }

 
  .react-calendar__month-view__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  }

  
  .react-calendar__navigation {
   display: flex;
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
  background: none;
  }

   .react-calendar__navigation__label {
  flex-grow: 0; 
  order: 1;    
  text-align: left;
  padding: 0;
  min-width: fit-content;
  margin-right: auto; 
   color: #94A6BE;
}

  .react-calendar__navigation__label__textContent {
 font-size: 14px;
  font-weight: 600;
  color: inherit; 
  text-transform: capitalize;
  }


  .react-calendar__navigation__arrow {
  background: none;
  font-size: 20px;
  min-width: 32px;
  border: none;
  cursor: pointer;
}


  .react-calendar__navigation__prev-button {
  order: 2;    
  color: #94A6BE;
  }

.react-calendar__navigation__next-button {
  order: 3;    
  color: #94A6BE;
}
 
  .react-calendar__tile {
     aspect-ratio: 1 / 1; 
  height: auto;
  color: #94A6BE; 
  font-size: 12px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  }
.react-calendar__tile--now {
  font-weight: 900;
  background: transparent;
}
  
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover {
    background: #94A6BE; 
  color: #FFFFFF;
  border-radius: 50%;
  }


  .react-calendar__tile:enabled:hover {
    background-color: rgba(148, 166, 190, 0.2);
    border-radius: 50%;
  }

 
  .react-calendar__month-view__weekdays__weekday abbr {
    color: #94A6BE;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  
  .react-calendar abbr {
    text-decoration: none;
    
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  
  .dark-theme .react-calendar,
  .dark-theme .react-calendar__navigation,
  .dark-theme .react-calendar__viewContainer {
    background-color: #20202c;
    color: #FFFFFF;
      border: none; 
  }

  .dark-theme .react-calendar__navigation__label__textContent {
    color: #FFFFFF; 
  }

  
  .dark-theme [class*="Calendar"], 
  .dark-theme [class*="PopNewCard"],
  .dark-theme [class*="PopBrowse"] {
    background-color: #20202c;
    color: #ffffff;
  }

  
  .dark-theme .react-calendar__month-view__days__day--neighboringMonth {
    color: #4e5566;
  }
    .dark-theme .pop-exit__block {
    background-color: #20202c;
    color: #ffffff;
    border: 0.7px solid #4e5566;
  }

  .dark-theme .pop-exit__ttl h2 {
    color: #ffffff;
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
