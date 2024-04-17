# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Install dependencies:

```bash
npm install
# or
yarn install
```
## Usage

To start the Expo development server and run the app on your device or emulator, use the following commands:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```
Or using npx:

```bash
npx expo start
```

Or if you have expo-cli installed globally:

```bash
expo start
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# React Native Navigation and API Calls 

This is a React Native application that includes navigation between two screens (Home and Details) and makes API calls to fetch data.

## Dependencies

- @react-navigation/native
- @react-navigation/native-stack
- axios
- react-native-gesture-handler
- react-native-screens
- react-native-safe-area-context

## Folder Structure

- **screens/**: Contains the screen components.
  - **HomePage.tsx**: Displays a list of items fetched from the API.
  - **DetailsPage.tsx**: Displays details of a selected item.
- **types/**: Contains the type files.
  - **Item.ts**: export interface item.
- **App.tsx**: Entry point of the application and Contains the navigation setup using React Navigation.

## API Used

[JSONPlaceholder](https://jsonplaceholder.typicode.com/): A fake online REST API for testing and prototyping. We are fetching the list of posts (https://jsonplaceholder.typicode.com/posts) for this application.
