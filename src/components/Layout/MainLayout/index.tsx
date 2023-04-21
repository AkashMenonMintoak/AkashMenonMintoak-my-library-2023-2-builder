import 
  React
  // { useEffect }
from "react";
import Header from "./Header";
// import { useDispatch } from "react-redux";
// import { decryptStoreId } from "../../helpers/decryptStoreId";
// import { setStoreIdAndBrochureId } from "../../../slice/globalSlice";
// import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const {storeId, brochureId} = router.query;
  // const paramsString1 = window.location.search;
  // const searchParams1 = new URLSearchParams(paramsString1);
  // const productId = searchParams1.get("productId");
  // const brochureId = searchParams1.get("brochureId");

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <div className="flex justify-center lg:my-2 lg:pb-10">
        <main className="">{children}</main>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
