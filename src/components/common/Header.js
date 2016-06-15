import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import DotTest from './DotTest';

const Header = ({loading}) => {
  return(
    <nav>
      <IndexLink to ="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/videos" activeClassName="active">Videos</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/users" activeClassName="active">Users</Link>
      
      {loading && <DotTest interval={111} dots={22}/>}
    </nav>
  );
};
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};


export default Header;
