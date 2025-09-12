import type { i18n, TFunction } from "i18next";
import { Container } from "reactstrap";
import { PageWrapper } from "./PageWrapper";
interface FooterProps {
  darkMode: boolean;
    t: TFunction;
    i18n: i18n;
}

export default function Footer({ darkMode, t, i18n }: FooterProps) {
  return (
    <footer
      className={`text-center py-3 mt-auto`}
      style={{ backgroundColor: darkMode ? "#343a40" : "#f8f9fa", color: darkMode ? "white" : "black" }}
    >
      <PageWrapper language={i18n.language}>
        <Container>
          <p>© {new Date().getFullYear()} - {t("footer.footerText")}</p>
        </Container>
      </PageWrapper>
    </footer>
  );
}
