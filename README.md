# ChatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

You can check the project live on Stackblitz: 

The link to the GitHub repo is: 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Motivations

- The app is built according to spec but with future changes in mind.
- The code was written in a manner that is using latest technologies and best practices
- Code does adhere to the spec though has adaptions of real-world scenarios (though I have no experience in building social-media or chat related apps, I have thorough understanding of how they work)
- Code contains opinionated parts that are adapted to these real-world scenarios such as:
  - merging of messages that are sent back to back
  - scroll to latest message when you send a message (receiving of real time messaging was not in the spec thus not implemented)
  - viewer numbers on chat rooms, 
  - list of rooms (not required in spec)
  - actual working slider, checkbox and radio buttons in settings (it was not clear in spec whether they should be working but they have real-world usage implemented)
  - user profiles concealed to match the current best practice's of chat room design in accordion
- Code contains set of packages used to maintain the application in the fastest and cleanest manner possible. The packages are tested in their own environment by open source developers before release thus tests are not implemented for those specific component parts
- Code contains comments throughout the app explaining principles behind decisions made
- Code partly contains latest technology like @ngrx/effects but it does not use some features of Angular like route resolvers, guards, http service interface, auth module, SSR and virtual scrolling introduced by Angular 8 (in messages and chat room list) as they are not part of the specification.
- Code is refactored into maintainable chunks
- Code is tested with regression & unit tests to match enterprise requirements
- Code contains lazy-loading for chat module but as there are not other modules, there is no way to leverage its effects
- Code is written disregarding mobile responsiveness (as not required in the spec). Some areas that are noticed are made mobile responsive

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

No end-to-end tests are written for this project.
