/* eslint-disable react/prop-types */
import style from './styles/ScrollView.module.css';

function ScrollView({ children, onScroll = null }) {
  return (
    <div
      className={ style.scroll }
      onScroll={ onScroll }
    >{ children }</div>
  );
}

export default ScrollView;