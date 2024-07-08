"use client";

import { NativeBridge } from "@/lib/nativeBridge";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [nativeBridge, setNativeBridge] = useState<NativeBridge | undefined>();
  useEffect(() => {
    console.log("useEffect");
    setNativeBridge(NativeBridge.getInstance());
  });
  const back = "BACK";

  return (
    <main className="flex min-h-screen flex-col items-center columns-3 p-24">
      <div className="w-full max-w-full h-12">
        <button
          className="absolute left-16 w-12 h-12 content-center transition-colors hover:bg-gray-100 text-black border-gray-500 rounded-full border-2"
          onClick={router.back}
        >
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            &lt;-
          </span>
        </button>
      </div>

      <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-100">
        <h2 className="mb-3 text-2xl font-semibold">
          로그인{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          네이티브 로그인 페이지
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          getDevicePlatform : {nativeBridge?.getDevicePlatform()}
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          isNative : {nativeBridge?.isNative() == true ? "TRUE" : "FALSE"}
        </p>
      </button>
    </main>
  );
}
