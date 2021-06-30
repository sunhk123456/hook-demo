import React, { PureComponent } from 'react';
import styles from './index.less';
class index extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      b:"123111"
    };
  }

  componentDidMount() {

  }





  render() {
const {b}=this.state;
    console.log(b)
    const c=<div>123</div>
    return (
      <div className={styles.aaa}>
      1123{c}
          {"aaa"?"123":"999"}

      </div>
    );
  }
}

export default index;
