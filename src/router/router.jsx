import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Root from '../Layaout/Root'
import Daily from '../Pages/Daily'
import Monthly from '../Pages/Monthly'
import NotFound from '../Pages/NotFound'
import Weekly from '../Pages/Weekly'


export const router = createBrowserRouter([

  {
    path: "/time-tracking-dashboard/",
    element : <Root/>,
    children : [
      {
        index:true,
        path: "/time-tracking-dashboard/",
        element : <Daily />
      },
      {
        path: "/time-tracking-dashboard/weekly",
        element : <Weekly/>
      },
      {
        path: "/time-tracking-dashboard/monthly",
        element : <Monthly/>
      },
      {
        path : "*" ,
        element :<NotFound/>,
      },
    ]
  }
]) 