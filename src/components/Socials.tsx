import {
  FaFacebook,
  FaFacebookMessenger,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="mt-4 flex justify-center items-center gap-3">
      <FaFacebook
        className="text-primaryDark hover:text-primary"
        fontSize={45}
      />
      <FaFacebookMessenger
        className="text-primaryDark hover:text-primary"
        fontSize={45}
      />
      <FaYoutube
        className="text-primaryDark hover:text-primary"
        fontSize={53}
      />
      <FaDiscord
        className="text-primaryDark hover:text-primary"
        fontSize={53}
      />
    </div>
  );
}
