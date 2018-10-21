import React from "react";
import reactDOM from 'react-dom';

  const Navigation2 = () => {
    return(
      <div><div id="profile-container">
          <img id="profileImage" src="#" />
        </div>
        <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required capture />
        <article>
          <div className="card-header">
            <img className="profile-photo" />
          </div>
          <ul className="card-links">
            <a href="active">
              <li>
                <i className="icon icon-user" /><span className="label">Profile</span>
              </li>
            </a>
            <hr />
            <a href="Beneficiary.html">
              <li className="#">
                <i className="icon icon-list-alt" /><span className="label">Beneficiaries</span>
              </li>
            </a>
            <hr />
            <a href="#">
              <li>
                <i className="icon icon-time" /><span className="label">Buy</span>
              </li>
            </a>
            <hr />
            <a href="#">
              <li>
                <i className="icon icon-file-text-alt" /><span className="label">Manage</span>
              </li>
            </a>
            <hr />
            <a href="FAQ.html">
              <li className="link-favorites">
                <i className="icon icon-heart" /><span className="label">Help</span>
              </li>
            </a>
          </ul>
        </article><br /><p /></div>
      )
    }
});
export default Navigation2;
