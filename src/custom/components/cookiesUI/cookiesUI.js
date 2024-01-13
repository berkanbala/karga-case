import { Button } from "@/common/components/ui/button/button";
import { showNotification } from "@/common/config/notificationConfig";
import styles from "./cookiesUI.module.scss";

export default function CookiesUI(props) {
  const { setShowCookie } = props;

  const handleAcceptCookies = () => {
    window.document.cookie = "didAgreePrivacy";
    showNotification("success", "başarıyla kabul edildi");
    setShowCookie(true);
  };

  const handleRejectCookies = () => setShowCookie(true);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        privacy setting — This site uses third-party website traking
        technologies to provide and continially improve our services. I agree
        and may revoke or change my consent at any time with effect for the
        future. See also our <span> Privacy Policy </span>
        and
        <span> Cookies </span>
      </div>
      <div className={styles.buttons}>
        <Button label="Deny" className="deny" onClick={handleRejectCookies} />
        <Button
          label="Accept"
          className="accept"
          onClick={handleAcceptCookies}
        />
      </div>
    </div>
  );
}
