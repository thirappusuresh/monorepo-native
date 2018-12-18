1. Install lerna, use the following command for the same. "npm install --global lerna"
2. Run command "lerna bootstrap", it'll install all the node_modules in the respective packages.
3. Run commant "npm install -g react-native-cli" to install react-native-cli globally.
4. Either you can simply run "sh autorun.sh" to start both the apps parallelly or use following commands for running 3 terminal tabs to watch both web and native app.
5. Go inside "packages/share" folder and run "npm run watch"
6. Go inside "packages/web" folder and run "npm run start"
7. Go inside "packages/native" folder and run "react-native run-android" to run the Native app in Android device or "react-native run-ios" for running in ios device.