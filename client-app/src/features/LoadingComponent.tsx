import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50000);
  }, []);

  return (
    <div>
      {loading ? (
        <ReactLoading type={"spin"} color={"#453400"} height={50} width={50} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
