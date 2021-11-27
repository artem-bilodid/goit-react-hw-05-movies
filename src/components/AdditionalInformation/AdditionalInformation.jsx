import s from './AdditionalInformation.module.scss';
import { useLocation, NavLink } from 'react-router-dom';

const AdditionalInformation = props => {
  const location = useLocation();
  const from = location?.state?.from;
  const getClassName = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <NavLink className={getClassName} to="./cast" state={{ from }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="./reviews" state={{ from }}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
