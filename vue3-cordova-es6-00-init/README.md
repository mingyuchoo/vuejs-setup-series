# vue3-cordova-es6-00-init

## Project setup

```
$ npm install -g @vue/cli
$ npm install -g cordova
$ vue create <my-app>
$ cd <my-app>
$ vue add cordova
$ npm run cordova-prepare

$ cd src-cordova
$ cordova platform add browser
$ cordova platform add electron
$ cordova platform add android
$ cordova platform add ios
$ cordova platform add osx

$ cd ../

# Browser
$ npm run cordova-serve-browser # Development Browser
$ npm run cordova-build-browser # Build Browser
$ npm run cordova-build-only-www-browser # Build only files to src-cordova

# Electron
$ npm run cordova-serve-electron # Development Electron
$ npm run cordova-build-electron # Build Electron
$ npm run cordova-build-only-www-electron # Build only files to src-cordova

# Android
$ npm run cordova-serve-android # Development Android
$ npm run cordova-build-android # Build Android
$ npm run cordova-build-only-www-android # Build only files to src-cordova

# iOS
$ npm run cordova-serve-ios # Development IOS
$ npm run cordova-build-ios # Build IOS
$ npm run cordova-build-only-www-ios # Build only files to src-cordova

# OSX
$ npm run cordova-serve-osx # Development OSX
$ npm run cordova-build-osx # Build OSX
$ npm run cordova-build-only-www-osx # Build only files to src-cordova
```

## Install Android Studio

- Install `android-studio-ide-202.7351085-mac.dmg` for macOS

## Setup Android Studio SDK

```
- Preferences > Appearance & Behavior > System Settings > Android SDK > SDK Platforms > Android 11.0 (R)
- Preferences > Appearance & Behavior > System Settings > Android SDK > SDK Tools
  - [-] Android SDK Build-Tools 31-rc5
		- [v] 30.0.3
		- [v] 30.0.2
		- [v] 28.0.3
	- [v] Android SDK Command-line Tools (latest)
	- [v] Android Emulator
	- [v] Android SDK Platform-Tools
	- [v] Intel x86 Emulator Accelerator (HAXM installer)
```

## Setup environment variables

```bash
# ~/.config/fish/config.fish

set -x  JAVA_HOME          "/Library/Java/JavaVirtualMachines/jdk1.8.0_261.jdk/Contents/Home"
set -x  ANDROID_SDK_ROOT   "$HOME/Library/Android/sdk"
set -x  NODE_PATH          "$HOME/.nvm/versions/node/v12.22.1"
set -x  NVM_DIR            "$HOME/.nvm"

set -gx PATH        $JAVA_HOME/bin  /usr/local/bin /usr/local/sbin $PATH
set -gx PATH        $ANDROID_SDK_ROOT/emulator $ANDROID_SDK_ROOT/tools $ANDROID_SDK_ROOT/platform-tools $PATH
set -gx PATH        $NVM_DIR $NODE_PATH/bin $PATH

```
