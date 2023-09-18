import { configureStore } from '@reduxjs/toolkit'

import Productreducer from './Newslice'

export default configureStore({
    reducer:{
        Productreducer,
    }

})