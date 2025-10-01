import logo from "../assets/logo.png";
import logoSmall from "../assets/logo-small.png";

export default function Logo({ isCollapsed }) {
  const texto = isCollapsed ? (
    <img src={logoSmall} className="logo" alt="SIGSA Logo Small" />
  ) : (
    <img src={logo} className="logo" alt="SIGSA Logo" />
  );

  return (
    <div
      style={{
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        color: "orange",
      }}
    >
      {texto}
    </div>
  );
}
