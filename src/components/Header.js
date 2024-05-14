function Header() {
  return (
    <header>
      <video src="" loop autoPlay muted>
        <source src="/public/video.mp4" type="video/mp4" />
      </video>
      <h1>Fnetrix</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
