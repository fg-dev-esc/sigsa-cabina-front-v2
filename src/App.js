import React from 'react';
import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { themeTokens } from './theme/tokens';
import Routes from './routes/Routes';

function App() {
  return (
    <ConfigProvider theme={themeTokens} locale={esES}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
