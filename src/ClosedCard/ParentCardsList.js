// @flow

import React from 'react';

type Props = {
  names: Array<string>,
};

export default (props: Props) => (
  <div className="pp-parent-card-title">
    <ul>
      {props.names.map((name, i) => (
        <li key={i}>
          <span className="pp-trigger-subtasks-sm pp-ico-bold-arrow-right" />
          {name}
        </li>
      ))}
    </ul>
  </div>
);
