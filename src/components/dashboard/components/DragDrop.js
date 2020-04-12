import React from 'react'
import { Rnd } from 'react-rnd'

export default function DragDrop({ child }) {
  return (
    <Rnd
      minHeight={500}
      maxHeight={500}
      minWidth={'50%'}
      style={{ background: '#444444', boxShadow: '0px 0px 10px #595959' }}
      onResize={(e, direction, ref, delta, position) => {
        console.log({
          mappanelheight: ref.offsetHeight,
          mappanelwidth: ref.offsetWidth
        })
      }}
      default={{
        x: 0,
        y: 70,
        width: '100%',
        height: 500,
        minHeight: 500
      }}
    >
      {child}
    </Rnd>
  )
}
