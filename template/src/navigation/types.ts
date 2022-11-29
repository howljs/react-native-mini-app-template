import {NavigatorScreenParams} from '@react-navigation/native';

export type AppRoutes = {
  BottomTabs: NavigatorScreenParams<BottomTabRoutes>;
  Detail: undefined;
};

export type BottomTabRoutes = {
  Home: undefined;
  Profile: undefined;
};
