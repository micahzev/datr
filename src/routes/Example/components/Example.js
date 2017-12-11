import React from 'react'

import Visualisation from './Visualisation'
import Blobs from '../assets/Blobs.png'

import './Example.scss'

export const Example = () => (
<div className="example" >

  <Visualisation />

  <div className='hero-title'>
    <h1>visualise your data&rsquo;s potential</h1>
    <h2>with data exploration techniques you can start to understand and qualify your data</h2>
  </div>



  <img alt='Data Visualisation' className='blobs' src={Blobs} />


    <h1>what is datr?</h1>
    <div className='paragraph-box'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam rhoncus dapibus erat. Aenean viverra rhoncus felis, sit amet aliquam mi fringilla quis.
      Maecenas vel vestibulum eros, et volutpat turpis. Aenean ultricies accumsan tellus.
      Etiam a elit sit amet magna tincidunt semper sit amet efficitur libero.
      Suspendisse volutpat accumsan commodo. Etiam lorem turpis, aliquet sit amet pretium eget, consequat ac elit.
      Duis imperdiet pretium nunc id vestibulum. Suspendisse sit amet accumsan dolor, vel tincidunt ante.
      Nam nec erat in ipsum mollis dignissim. Vivamus ultricies mi quis felis lacinia feugiat.
      Proin mauris magna, pretium et congue eu, imperdiet non nisi. Vestibulum posuere blandit tincidunt.
      Proin rutrum euismod sapien, quis ullamcorper lorem sodales id.
      Suspendisse bibendum mauris sit amet viverra feugiat. Cras rutrum eros vel malesuada lacinia.</p>

      <p>Curabitur rutrum tempus ex eu mollis. Nullam sed diam nec magna finibus dictum.
      Sed rutrum erat quis nisl malesuada, et vestibulum tellus congue.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Nulla tempor arcu et nisi efficitur, id convallis nibh ornare.
      Donec tortor nisi, interdum euismod imperdiet ut, rhoncus nec sapien.</p>
    </div>


    <h1>how does it work?</h1>
    <div className='paragraph-box'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam rhoncus dapibus erat. Aenean viverra rhoncus felis, sit amet aliquam mi fringilla quis.
      Maecenas vel vestibulum eros, et volutpat turpis. Aenean ultricies accumsan tellus.
      Etiam a elit sit amet magna tincidunt semper sit amet efficitur libero.
      Suspendisse volutpat accumsan commodo. Etiam lorem turpis, aliquet sit amet pretium eget, consequat ac elit.
      Duis imperdiet pretium nunc id vestibulum. Suspendisse sit amet accumsan dolor, vel tincidunt ante.
      Nam nec erat in ipsum mollis dignissim. Vivamus ultricies mi quis felis lacinia feugiat.
      Proin mauris magna, pretium et congue eu, imperdiet non nisi. Vestibulum posuere blandit tincidunt.
      Proin rutrum euismod sapien, quis ullamcorper lorem sodales id.
      Suspendisse bibendum mauris sit amet viverra feugiat. Cras rutrum eros vel malesuada lacinia.</p>

      <p>Curabitur rutrum tempus ex eu mollis. Nullam sed diam nec magna finibus dictum.
      Sed rutrum erat quis nisl malesuada, et vestibulum tellus congue.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Nulla tempor arcu et nisi efficitur, id convallis nibh ornare.
      Donec tortor nisi, interdum euismod imperdiet ut, rhoncus nec sapien.</p>
    </div>

</div>
)

export default Example
