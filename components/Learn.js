const Learn = props => (
  <p className='like-gold hover:underline text-base leading-3 my-5 '>
    {props.text} →
  </p>
);

Learn.defaultProps = {
  text: "LEARN MORE"
};
export default Learn;
