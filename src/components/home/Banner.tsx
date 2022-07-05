export default function Banner(): JSX.Element {
  return (
    <div id="homePage" className="center">
      <h2>U nas dobrze się wyśpisz</h2>
      <img src={process.env.PUBLIC_URL + 'Img/header.jpg'} alt="bannerImage" />
    </div>
  );
}
