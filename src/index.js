import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

const app = () => <Routes />;

export default app;
