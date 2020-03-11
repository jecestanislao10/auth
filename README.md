# auth
wrapper library for passport-jwt

## Install
```
npm install --save jec-auth
```

## Example Usage

```
const {initialize, authenticate} = require('jec-auth')
const { Router } = require('express');
const userModel = require('./*')
const restrictedControllers = require('./*')

const router = Router();

router.use(initialize(process.env.ACCESS_KEY, userModel));

router.use(authenticate(), restrictedControllers);

module.exports = router;

```

