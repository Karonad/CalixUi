# CalixUi

This project intends to create an angular components library.

## Installation

npm install calix-ui

## Adding Calix to your projects

Add Calix[COMPONENT_NAME]Module to your module imports then use it as a describe in your html.

## Components

**CalixInputComponent**

Html tag: `<calix-input></calix-input>`

**Parameters**

- labelTitle (string): Input to define expected label title.

- inputMandatory (boolean): Input to display if it is required or not.

- placeholder (string): Input to define expected placeholder text.

- value (string): Input to define and bind expected value.

- hint (string): Input to define expected hint text.

- errorMessage (string): Input to define expected error message text.

- hasError (boolean): Input to display an error.

**Example**

`<calix-input>`

&nbsp;&nbsp;`[labelTitle]="'A Label'"`

&nbsp;&nbsp;`[inputMandatory]="true"`

&nbsp;&nbsp;`[placeholder]="'A placeholder'"`

&nbsp;&nbsp;`[hint]="'A hint !'"`

&nbsp;&nbsp;`[value]="my_value"`

`</calix-input>`

## Version

Build in node.js 16.17.1 and npm 8.15.0

## Dependencies

Peer Dependencies:

- @angular/common ^14.0.0

- @angular/core ^14.0.0

Dependencies:

- tslib ^2.3.0
