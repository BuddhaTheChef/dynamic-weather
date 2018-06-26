import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={130} width={180} data={props.data} limit={20}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
        <SparklinesSpots />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
