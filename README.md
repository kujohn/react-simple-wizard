react-simple-wizard
----------------------
A simple step-by-step wizard component.

usage
----------------------
##### `<Wizard>`
Parent component with two public methods to navigate the steps:
```
WizardRef.next()      // goes to the next step
WizardRef.jump(step)  // jumps to the desired step
```

##### `<Wizard.Nav>`
Pass your navigation components as a child of this component.
All elements will be rendered and a class of `active` will be added to the active child.

##### `<Wizard.Pages>`
Pass your page content components as a child of this component.
Only the active child will be rendered while other pages are hidden but still accessible.


example
--------------------
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

style
-------------------
None, you'll have to handle styling your navigation elements.
Active navigation will have `active` added to the element.
