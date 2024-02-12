import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <>
      <div className="solid"></div>
      <div style={{ fontSize: "1.2rem", margin: "2rem" }}>
        Want to contact me? Shoot me an email at{" "}
        <a
          target="_blank"
          href="mailto:sophiazh@stanford.edu"
          style={{ color: "inherit" }}
        >
          sophiazh@stanford.edu
        </a>
        !
      </div>
      <div className="horizontal">
        <SocialIcon url="https://www.linkedin.com/in/sophiapzhang/" />
        <SocialIcon url="https://github.com/soapantelope" />
        <SocialIcon url="https://www.youtube.com/channel/UCTLI_taqhNWFlhf2XZ0MIpg" />
        <SocialIcon url="https://www.tiktok.com/@queazie" />
      </div>
    </>
  );
}
