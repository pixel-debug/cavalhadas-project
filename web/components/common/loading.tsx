import { useEffect, useState } from "react";
import Image from "next/image";
import spinner from "../../assets/spinner/blue_spinner.svg";

export const Loading = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100">
      {show ? (
        <Image src={spinner} alt={"spinner"} width={100} height={100} />
      ) : null}
    </div>
  );
};
