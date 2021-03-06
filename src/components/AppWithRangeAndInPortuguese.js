import React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import ptLocale from 'react-semantic-ui-datepickers/dist/locales/pt-BR';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
 
export const AppWithBasic = ({ onDateChange }) => (
  <SemanticDatepicker fluid label='Start Date' onDateChange={onDateChange} />
);
 
export const AppWithRangeAndInPortuguese = ({ onDateChange }) => (
  <SemanticDatepicker 
    fluid label='End Date'
    locale={ptLocale}
    onDateChange={onDateChange}
    type="range"
  />
);