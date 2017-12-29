react-announcement-bar

Make Announcement Bar On React Website


#### Demos


## Installation
```sh
npm install react-announcement-bar
```

## Overview & Basic Example
`<AnnouncementBar />` You can pass HTML to this component as children. Component has following options to configure
 - `width` _(string)_ - width of announcement bar in px or %
 - `height` _(string)_ - height of announcement bar in px
 - `padding` _(string)_ - padding of announcement bar in px
 - `backgroundColor` _(string)_ - background color of announcement bar
 - `iconColor` _(string)_ - close icon color
 - `topOffset` _(string)_ - distance of announcement bar from top in px default 0px
 - `relative` _(boolean)_ - positioning of announcement bar relative or fixed send {true} or {false}


app.js
```js
import React from 'react';
import { AnnouncementBar } from 'react-announcement-bar';
...

class App extends React.Component ({
  render() {
    return (
      ...
      <AnnouncementBar height="60" backgroundColor="#000000" relative={false} width="100%">
       {
         () => {
           return (
             <div style={{width: "80%", margin: "auto", color: "#ffffff" }}>
                 Want to recieve notifications
                 <a href="#" style={{ fontWeight: "bold", color: "#ffffff" }}>ENABLE !</a>
             </div>
           )
         }
       }
      </AnnouncementBar>
      ...
    );
  },
});
