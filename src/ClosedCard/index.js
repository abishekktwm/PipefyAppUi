// @flow

import React from 'react';
import ParentCardsList from './ParentCardsList';

type Props = {
  title: string,
  late: boolean,
  expired: boolean,
  parentCardNames: Array<string>
};

export default (props: Props) => (
  <div className="pp-card-wrap">
  <div className="pp-card" draggable="true">
    <div className="pp-card-header">
      <div className="pp-header-elements">
        <div className="pp-card-label">
          <span className="pp-tooltip" data-title="User Story" style={{background: 'rgb(224, 43, 237)'}}></span>
          <span className="pp-tooltip" data-title="Product Review" style={{background: 'rgb(0, 204, 255)'}}></span>
        </div>
        <div className="pp-cards-badges">
          { props.late && <label className="pp-badges-warning">LATE</label> }
          { props.expired && <label className="pp-badges-danger">EXPIRED</label> }
        </div>
      </div>
    </div>
    <div className="pp-card-content">
      <span className=" pp-trigger-subtasks pp-ico-bold-arrow-right pp-active"></span>
      <p>{props.title}</p>
      <div className="pp-card-footer">
        <div className="pp-footer-stats">
          <span className="pp-tooltip-top" data-title="89 days in this Pipe">
            <i className="pp-color-warning pp-ico-time"></i>
            <span>99min</span>
          </span>
          <span className="pp-tooltip-top" data-title="66 days in this Phase">
            <i className="pp-color-success pp-ico-phase"></i>
            <span>99min</span>
          </span>
          <span className="pp-tooltip-top" data-title="Last updated 66d ago">
            <i className="pp-color-info pp-ico-refresh"></i>
            <span>99min</span>
          </span>
        </div>
        <div className="pp-card-users">
          <div className="pp-tooltip-left" data-title="Flavio Muniz">
            <img className="pp-round" src="https://gravatar.com/avatar/49b0d093674fe784cf3084c0e7fc414f.png?s=128&amp;d=http://dev.pipefy.com:3000/images/user-avatar-default.png"/>
          </div>
          <span className="pp-more">+1</span>
        </div>
      </div>
    </div>
    {!!props.parentCardNames.length && <ParentCardsList names={props.parentCardNames}/>}
  </div>
</div>
);
