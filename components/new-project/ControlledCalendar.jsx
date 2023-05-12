import { useState } from 'react';
import { DatePicker, defaultTheme, Provider } from '@adobe/react-spectrum';
import { parseDate } from '@internationalized/date';
const myTheme = {
  ...defaultTheme,
  colorPrimary: 'red',

  fontFamily: 'Arial',
};

function App() {
  let [value, setValue] = useState(parseDate('2020-02-03'));
  return (
    <Provider theme={myTheme}>
      <DatePicker label='Date (controlled)' value={value} onChange={setValue} />
    </Provider>
  );
}
export default App;
