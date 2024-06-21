import dynamic from "next/dynamic";

const Header = dynamic(() => import("../custom/pages/dashboard/dashboard"), {
  ssr: false,
});

export default function Index() {
  return <Header />;
}
