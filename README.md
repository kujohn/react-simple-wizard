react-wizard
----------------------
A simple step-by-step wizard [React](https://github.com/facebook/react) component.

usage
--------------------
#### `<Wizard>`
Parent component with two public methods to navigate the steps:
`.next()` goes to the next step
`.jump(step)` jumps to the desired step

#### `<Wizard.Nav>`
Pass your navigation components as a child of this component.
All elements will be rendered and a class of `active` will be added to the active child.

#### `<Wizard.Pages>`
Pass your page content components as a child of this component.
Only the active child will be rendered while other pages are hidden but still accessible.


example
-------------------
```
var Wizard = require('react-wizard');

React.render(
    <Wizard>
        <Wizard.Nav>
            <div>Step 1 - User Info</div>
            <div>Step 2 - Payment</div>
            <div>Step 3 - Download</div>
        </Wizard.Nav>

        <Wizard.Pages>
            <Step1Component />
            <Step2Component />
            <Step3Component />
        </Wizard.Pages>
    </Wizard>,
    document.getElementById('container')
);
```
